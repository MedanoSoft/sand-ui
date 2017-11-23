import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite/no-important'

import styleGenerator from './styles'
import Icon from '../Icon'

/**
 * Simple styled text input. Available for any text-like input if you describe it as type prop.
 */
class TextInput extends Component {
  constructor (props, context) {
    super(props)
    this.stylesheet = styleGenerator(context.colors)
    this.setInputIcon = this.setInputIcon.bind(this)
  }

  setInputIcon () {
    const { icon, style, className } = this.props
    if (typeof icon === typeof '') {
      return (
        <div className={css(this.stylesheet.icon)}>
          <Icon name={icon} style={style && style.fontSize && { height: style.fontSize, width: style.fontSize }} color={className === 'active' ? 'inactive' : className} />
        </div>
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
      <div className={css(this.stylesheet.wrapper)}>
        <input
          {...passedProps}
          className={css(this.stylesheet[className], this.props.icon && this.stylesheet.leftIcon)}
          disabled={className === 'disabled' ? true : disabled}
          style={style && style.fontSize && !style.textIndent && { ...style, textIndent: style.fontSize, paddingLeft: '0.8rem' }}
        />
        {this.props.icon && this.setInputIcon()}
      </div>
    )
  }
}

TextInput.propTypes = {
  /**
   * Type of input
   */
  type: PropTypes.oneOf([
    'text',
    'number',
    'email',
    'password',
    'date',
    'search'
  ]),
  /**
   * Change input color depending on type
   */
  className: PropTypes.oneOf([
    'active',
    'success',
    'error',
    'disabled'
  ]),
  /**
   * Disable input interaction
   */
  disabled: PropTypes.bool,
  /**
   * Insert an icon at the left, or the element you desire to
   */
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  /**
   * Custom styles to add
   */
  style: PropTypes.object
}

TextInput.defaultProps = {
  type: 'text',
  className: 'active'
}

TextInput.contextTypes = {
  colors: PropTypes.object
}

export default TextInput
