import 'babel-polyfill';
import 'source-map-support/register'

import * as express from 'express';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as config from 'config';
import { invert, isString, merge } from 'lodash';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import { Engine } from 'apollo-engine';
import { createServer } from 'http';
import * as path from 'path';
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import * as mergeGraphqlSchemas from 'merge-graphql-schemas';
import { context } from './interfaces/context';


import { setupDb } from './db/mongo-connector';

const PORT = 3000;
const WS_GQL_PATH = '/subscriptions';
const STATIC_SERVER = 'http://localhost:3000';

const ENGINE_API_KEY: string = config.get("apolloEngineKey");
const fileLoader = mergeGraphqlSchemas.fileLoader;
const mergeTypes = mergeGraphqlSchemas.mergeTypes;
const mergeResolvers = mergeGraphqlSchemas.mergeResolvers;

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schemas'), { recursive: true, extensions: ['.graphql'] }))
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

function createSchema() {
  const mockResolvers = {
    Query: {},
    Mutation: {}
  };
  const executableSchema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
    schemaDirectives: {
      //  ...accountsGraphQL.schemaDirectives,
    },
    logger: { log: (e) => console.log(e) },
  });

  return executableSchema;
}


async function main() {
  const app = express();
  app.use(cors());
  await setupDb();
  app.use(session({
    secret: 'grant',
    resave: true,
    saveUninitialized: true,
  }));


  const schema = createSchema();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  const models: context = {

  }

  app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress((request) => {
      return {
        schema,
        tracing: true,
        cacheControl: true,
        context: Object.assign({},
          models),
        debug: true
      }
    }));

  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: 'ws://localhost:3000/subscriptions',
  }));

  const server = createServer(app);

  new SubscriptionServer(
    {
      schema,
      execute,
      subscribe,
      onConnect: async ({ authToken, refreshToken }, webSocket) => {
        // if (authToken && refreshToken) {
        //   try {
        //     const user = await accounts.refreshTokens(authToken, refreshToken, "", "",);
        //     if (user === null) {
        //       throw new Error('Invalid or expired token!');
        //     }
        //     return Object.assign(models, { user: user });
        //   } catch (err) {
        //     const newTokens: any = await accounts.refreshTokens(authToken, refreshToken, "", "", ); //todo get ip and useragent
        //     return Object.assign(models, { user: newTokens.user });
        //   }
        // }
        return models;
      },
    },
    {
      path: WS_GQL_PATH,
      server,
    }
  );

  server.listen(PORT, () => {
    console.log('server running on: ' + PORT);
  });
}

main().catch((e) => console.error('Failed to start server', e));
