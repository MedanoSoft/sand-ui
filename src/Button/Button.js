import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'

import styleGenerator from './styles'

/**
 * Just like any button, excepting you can pass a link to it
 */
class Button extends Component {
  constructor (props, context) {
    super(props)
    this.stylesheet = styleGenerator(context.colors)
  }

  render () {
    const { link, type, light } = this.props
    const passedProps = {
      ...this.props
    }
    delete (passedProps.link)
    delete (passedProps.light)

    let component = link ? (
      <a {...passedProps} href={link} className={css(light ? this.stylesheet[`light-${type}`] : this.stylesheet[type])} role={'button'}>
        {this.props.children}
      </a>
    ) : (
      <button {...passedProps} className={css(light ? this.stylesheet[`light-${type}`] : this.stylesheet[type])}>
        {this.props.children}
      </button>
    )

    return component
  }
}

Button.propTypes = {
  /** 	Activate a light-style button */
  light: PropTypes.bool.isRequired,
  /** The same as anchor href */
  link: PropTypes.string,
  /** Button label */
  style: PropTypes.object,
  /** Change button color depending on type */
  type: PropTypes.oneOf([
    'active', 
    'info',
    'inverse',
    'success',
    'warning',
    'danger',
    'disabled'
  ])
}

Button.defaultProps = {
  light: false,
  link: '',
  style: {},
  type: 'active'
}

Button.contextTypes = {
  colors: PropTypes.object
}

export default Button
