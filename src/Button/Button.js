import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'

import defaultStyles from './styles'

class Button extends Component {
  render () {
    const { link, type } = this.props
    const passedProps = {
      ...this.props
    }
    delete (passedProps.link)

    if (link) {
      return (
        <a {...passedProps} href={link} className={css(defaultStyles[type])} role={'button'}>
          {this.props.children}
        </a>
      )
    }
    return (
      <button {...this.props} className={css(defaultStyles[type])}>
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  link: PropTypes.string
}

Button.defaultProps = {
  type: 'active'
}

export default Button
