// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://eric-wood-guitars-backend.herokuapp.com/",
    cache: new InMemoryCache(),
});

export default client;