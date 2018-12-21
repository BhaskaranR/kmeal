import express from 'express';
import {json } from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import * as mergeGraphqlSchemas from 'merge-graphql-schemas';
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';

import * as path from 'path';

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
      logger: { log: (e: any) => console.log(e) },
    });
  
    return executableSchema;
  }

const app = express();
app.use(json());

const schema = createSchema();

app.use(
    '/graphql',
    json(),
    graphqlExpress(() => {
      return {
        schema,
        tracing: true,
        cacheControl: true,
      }
    }));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: 'ws://localhost:3000/subscriptions',
  }));

var server = app.listen(8081, function () {
    console.log("server listening on port 8081");
});
