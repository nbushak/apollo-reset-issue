import React from 'react'

export default class ResetComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      visible: true,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    const {visible} = this.state

    e.preventDefault()

    console.log(visible ? 'hide' : 'show')

    this.setState({
      visible: !visible,
    })
  }

  render () {
    const {children} = this.props
    const {visible} = this.state
    return (
      <div>
        <a href="/reset" onClick={this.handleClick}>{visible ? 'hide <Data/>' : 'show <Data/>'}</a>
        <div style={{border: '1px solid black'}}>
          {visible ? children : 'nothing here...'}
        </div>
      </div>
    )
  }
}
