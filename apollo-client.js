// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "mysql://b7xyellb7jzfbm9t:oh9pqozqqgem2szs@l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/jzlh3l230nfnbz3x",
    cache: new InMemoryCache(),
});

export default client;