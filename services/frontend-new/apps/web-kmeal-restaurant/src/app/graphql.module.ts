import { NgModule } from "@angular/core";
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split, from, ApolloLink } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { OperationDefinitionNode } from "graphql";

import { onError } from "apollo-link-error";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { WebSocketLink } from "apollo-link-ws";
import { HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";
import { createDfuseClient } from "@dfuse/client";

const dfuseClient = createDfuseClient({
  apiKey: environment.DFUSE_API_KEY!,
  network: "kylin",
});

@NgModule({
  declarations: [],
  imports: [],
  exports: [ApolloModule, HttpLinkModule],
  providers: []
})
export class ApiModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const WS_URI = environment.dfuse_graphql_endpoint;

    const wsClient = new SubscriptionClient(dfuseClient.endpoints.graphqlStreamUrl, {
      lazy: true,
      connectionParams: async () => {
        const apiToken = await dfuseClient.getTokenInfo();
        return {
          Authorization:`Bearer ${apiToken.token}`,
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

    const networkLink = split(({ query }) => {
      const { kind, operation } = getMainDefinition(query) as OperationDefinitionNode;
      return kind === "OperationDefinition" && operation === "subscription";
    }, wsLink);

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
      operation.setContext({
        headers: new HttpHeaders().set("x-hasura-access-key", "baba")
      });

      return forward(operation);
    });

    const link = httpLink.create({
      uri: dfuseClient.endpoints.graphqlStreamUrl
    });

    apollo.create({
      link: from([middleware, networkLink, errorLink]),
      cache: new InMemoryCache()
    });
  }
}
