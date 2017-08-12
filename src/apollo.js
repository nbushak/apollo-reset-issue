import {ApolloClient, createNetworkInterface} from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj697b1ut4w060187xfsjfcyz',
  // opts: {
  //   credentials: 'include',
  // },
})

export const client = new ApolloClient({
  networkInterface,
})
