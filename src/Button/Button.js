import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'

import defaultStyles from './styles'

class Button extends Component {
  render () {
    const { link, type, light } = this.props
    const passedProps = {
      ...this.props
    }
    delete (passedProps.link)
    delete (passedProps.light)

    if (link) {
      return (
        <a {...passedProps} href={link} className={css(light ? defaultStyles[`light-${type}`] : defaultStyles[type])} role={'button'}>
          {this.props.children}
        </a>
      )
    }
    return (
      <button {...this.props} className={css(light ? defaultStyles[`light-${type}`] : defaultStyles[type])}>
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

export default Button
