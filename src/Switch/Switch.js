import React, { Component } from 'react'

import PropTypes from 'prop-types'

import Circle from './circle'

import Box from './box'

class Switch extends Component {
  setComponent (type) {
    switch (type) {
      case 'circle':
        return Circle
      case 'box':
        return Box
      default:
        return Circle
    }
  }

  render () {
    const { type } = this.props

    const passedProps = {
      ...this.props
    }

    delete (passedProps.type)

    const Component = this.setComponent(type)

    return (
      <Component {...passedProps} />
    )
  }
}

Switch.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  status: PropTypes.bool.isRequired,
  onChange: PropTypes.func
}

Switch.defaultProps = {
  type: 'circle',
  status: true
}

export default Switch
