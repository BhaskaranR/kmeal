import { NgModule } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import {
  InMemoryCache,
} from 'apollo-cache-inmemory';
import { split, from, ApolloLink } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { OperationDefinitionNode } from 'graphql';

import { onError } from 'apollo-link-error';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from 'apollo-link-ws';


@NgModule({
  declarations: [],
  imports: [ApolloModule,HttpLinkModule],
  exports: [ApolloModule, HttpLinkModule],
  providers: []
})
export class ApiModule {
  constructor(
    apollo: Apollo,
  ) {
    
    const WS_URI = `wss://kmeal-api.herokuapp.com/v1alpha1/graphql`;

    const wsClient = new SubscriptionClient(WS_URI, {
      lazy: true,
      connectionParams: () => {
        return {
          'x-hasura-access-key': `baba`
        };
      },
      reconnect: true,
      reconnectionAttempts: 5,
      connectionCallback: (error: Error[]) => {
        if (error) {
          console.log("ws error!! : ", error);
        }
      },
      inactivityTimeout: 1000
    });

    const wsLink = new WebSocketLink(wsClient);

    const networkLink = split(
      ({query}) => {
        const { kind, operation } = getMainDefinition( query ) as OperationDefinitionNode;
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      wsLink,
    );

    
   const errorLink = onError(({ graphQLErrors, networkError }) => {
       
        if (graphQLErrors) {
            graphQLErrors.map(({ message, locations, path }) =>
                console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
            );
        }
    
        if (networkError) {
            console.log(`[Network error]: ${networkError}`);
        }
    });

   const middleware = new ApolloLink((operation, forward) => {
        
        operation.setContext(({ headers = {} }) => ({
            headers: {
            ...headers,
            'x-hasura-access-key': 'baba',
            } 
        }));

        return forward(operation);
    })

    apollo.create({
      link: from([middleware,networkLink,errorLink]),
      cache: new InMemoryCache()
    });
  }
}