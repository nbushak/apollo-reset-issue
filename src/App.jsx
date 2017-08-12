import React, { Component } from 'react'
import {ApolloProvider} from 'react-apollo'
import {client} from './apollo.js'
import Toggle from './ToggleComponent.jsx'
import Data from './DataComponent.jsx'
import Reset from './ResetComponent.jsx'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Toggle>
            <Data/>
          </Toggle>
          <Reset/>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
