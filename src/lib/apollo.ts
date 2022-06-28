import {ApolloClient, useQuery, gql, InMemoryCache} from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vr5xm91vps01t667hb08xu/master',
  cache: new InMemoryCache()
});
