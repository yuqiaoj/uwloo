import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://uwloo.hasura.app/v1/graphql",
  }),
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
