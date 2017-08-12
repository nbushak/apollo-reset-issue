import React from 'react'
import {graphql, gql} from 'react-apollo'

class DataComponent extends React.Component {
  render () {
    console.log(this.props.data)
    const {loading, error, allMessages} = this.props.data

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      console.error(error)
      return <div>Error... (see console)</div>
    }

    return (
      <div>
        {allMessages.map((mess) => <div key={mess.id}>{mess.text}</div>)}
      </div>
    )
  }
}

const DataQuery = gql`
query DataQuery {
  allMessages {
    id,
    text,
  }
}
`

export default graphql(DataQuery)(DataComponent)
