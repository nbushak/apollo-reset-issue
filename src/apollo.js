import ApolloClient from 'apollo-client'
import Link from 'apollo-link-http';
import Cache from 'apollo-cache-inmemory'

export const client = new ApolloClient({
  link: new Link({
    uri: 'https://api.graph.cool/simple/v1/cj697b1ut4w060187xfsjfcyz',
  }),
  cache: new Cache(),
})
