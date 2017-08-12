import React from 'react'
import {withApollo} from 'react-apollo'

class ResetComponent extends React.Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()

    console.log('resetting apollo...')
    this.props.client.resetStore()
  }

  render () {
    return (
      <a href="/reset" onClick={this.handleClick}>reset apollo</a>
    )
  }
}

export default withApollo(ResetComponent)
