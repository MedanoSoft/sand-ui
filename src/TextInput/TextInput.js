import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'

import defaultStyles from './styles'

import Icon from '../Icon'

class TextInput extends Component {
  setInputIcon () {
    const { icon, style, className } = this.props
    if (typeof icon === typeof '') {
      return (
        <Icon name={this.props.icon} style={style && style.fontSize && { height: style.fontSize, width: style.fontSize }} appearance='input' color={className === 'active' ? 'inactive' : className} />
      )
    }
    return React.cloneElement(icon, { appearance: 'input' })
  }
  render () {
    const { className, disabled, style } = this.props
    const passedProps = {
      ...this.props
    }
    delete (passedProps.icon)
    return (
      <div className={css(defaultStyles.wrapper)}>
        <input
          {...passedProps}
          className={css(defaultStyles[className], this.props.icon && defaultStyles.leftIcon)}
          disabled={className === 'disabled' ? true : disabled}
          style={style && style.fontSize && !style.textIndent && { ...style, textIndent: style.fontSize, paddingLeft: '0.8rem' }}
        />
        {this.props.icon && this.setInputIcon()}
      </div>
    )
  }
}

TextInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
}

TextInput.defaultProps = {
  type: 'text',
  className: 'active'
}

export default TextInput
