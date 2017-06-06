import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'

import defaultStyles from './styles'

class Radio extends Component {
  constructor (props) {
    super(props)

    this.handleRadio = this.handleRadio.bind(this)
    this.setStyles = this.setStyles.bind(this)
  }

  setStyles () {
    if (this.props.checked) {
      if (this.props.disabled) { return defaultStyles.disabledChecked }
      return defaultStyles.active
    } else {
      if (this.props.disabled) { return defaultStyles.disabled }
      return defaultStyles.inactive
    }
  }

  handleRadio (event) {
    if (this.props.onChange) { this.props.onChange(event.target.value) }
  }

  render () {
    const { name, value } = this.props
    const passedProps = {
      ...this.props
    }
    delete (passedProps.children)
    return (
      <label htmlFor={value} className={css(defaultStyles.wrapper)}>
        <input {...passedProps} className={css(this.setStyles())} type='radio' id={value} onChange={this.handleRadio} />
        <span className={css(defaultStyles.text)}>{this.props.children}</span>
      </label>
    )
  }
}

Radio.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

Radio.defaultProps = {
  name: 'defaultRadio',
  checked: false
}

export default Radio
