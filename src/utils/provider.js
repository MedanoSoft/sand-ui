import React, { Component } from 'react'

class UIProvider extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default UIProvider
