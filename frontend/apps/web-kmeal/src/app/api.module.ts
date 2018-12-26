import { NgModule } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory';
import { split, from, ApolloLink,concat } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { OperationDefinitionNode } from 'graphql';

import { onError } from 'apollo-link-error';
import { HttpHeaders } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [],
  exports: [ApolloModule, HttpLinkModule],
  providers: []
})
export class ApiModule {
  constructor(
    apollo: Apollo,
  ) {
      /*
    const WS_URI = `wss://${environment.HOST}:${environment.PORT}${
      environment.WS_PATH
    }`;

    const wsClient = subscriptionService.getWSClient(WS_URI, {
      lazy: true,
      // When connectionParams is a function, it gets evaluated before each connection.
      connectionParams: () => {
        return {
          token: `Bearer ${authService.getJwt()}`
        };
      },
      reconnect: true,
      reconnectionAttempts: 5,
      connectionCallback: (error: Error[]) => {
        if (error) {
          console.log(error);
        }

        console.log('connectionCallback');
      },
      inactivityTimeout: 1000
    });

    const wsLink = new WebSocketLink(wsClient);

    const networkLink = split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(
          query
        ) as OperationDefinitionNode;
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      wsLink,
      uploadLink
    );

    const authLink = createAuthLink(authService);
    const fragmentMatcher = new IntrospectionFragmentMatcher({
      introspectionQueryResultData
    });
    */
   const errorLink = onError(({ graphQLErrors, networkError, operation, forward, response }) => {
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
    operation.setContext({
        headers: new HttpHeaders().set('X-Hasura-Access-Key', 'baba')
    });

    if (forward)
    return forward(operation)
  else
    return null
  })

    apollo.create({
      link: from([ middleware,errorLink]),
      cache: new InMemoryCache()
    });
  }
}