import React from 'react'
import {graphql, gql} from 'react-apollo'

class DataComponent extends React.Component {
  render () {
    const {loading, error, allTweets} = this.props.data

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      console.error(error)
      return <div>Error... (see console)</div>
    }

    return (
      <div>
        {allTweets.map((tweet) => <div key={tweet.id}>{tweet.text}</div>)}
      </div>
    )
  }
}

const DataQuery = gql`
query DataQuery {
  allTweets {
    id,
    text,
  }
}
`

export default graphql(DataQuery)(DataComponent)
