import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'

import styleGenerator from './styles'

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

    if (link) {
      return (
        <a {...passedProps} href={link} className={css(light ? this.stylesheet[`light-${type}`] : this.stylesheet[type])} role={'button'}>
          {this.props.children}
        </a>
      )
    }
    return (
      <button {...passedProps} className={css(light ? this.stylesheet[`light-${type}`] : this.stylesheet[type])}>
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  link: PropTypes.string,
  light: PropTypes.bool.isRequired
}

Button.defaultProps = {
  type: 'active',
  light: false
}

Button.contextTypes = {
  colors: PropTypes.object
}

export default Button
