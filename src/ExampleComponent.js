import React, { Component } from 'react'


const github_personal_access_toke1n="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"

const vhd_api_key="vhd_api_key100123434"

export default class ExampleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    console.log('hi')
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
        <p>You've clicked the button {this.state.count} times.</p>
      </div>
    )
  }
}
