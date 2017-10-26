import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Circle from './circle'
import Box from './box'

/**
 * Use a switch if you need a playful component for a boolean input value.
 */
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
  /**
   * Style of the current switch
   */
  type: PropTypes.oneOf([
    'circle',
    'box'
  ]).isRequired,
  /**
   * 
   */
  name: PropTypes.string,
  /**
   * Current checkbox status
   */
  status: PropTypes.bool.isRequired,
  /**
   * Action on checkbox status, returns the Switch new state as a boolean
   */
  onChange: PropTypes.func
}

Switch.defaultProps = {
  type: 'circle',
  status: true
}

export default Switch
