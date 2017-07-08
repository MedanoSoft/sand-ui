import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'

import styleGenerator from './styles'

class Checkbox extends Component {
  constructor (props, context) {
    super(props)

    this.stylesheet = styleGenerator(context.colors)

    this.state = {
      checked: this.props.checked
    }

    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.setStyles = this.setStyles.bind(this)
  }

  setStyles () {
    if (this.state.checked) {
      if (this.props.disabled) { return this.stylesheet.disabledChecked }
      return this.stylesheet.active
    } else {
      if (this.props.disabled) { return this.stylesheet.disabled }
      return this.stylesheet.inactive
    }
  }

  handleCheckbox (event) {
    this.setState({
      checked: !!event.target.checked
    })
    if (this.props.onChange) { this.props.onChange(this.state.checked) }
  }

  render () {
    const { name } = this.props

    return (
      <label htmlFor={name} className={css(this.stylesheet.wrapper)}>
        <input {...this.props} className={css(this.setStyles())} checked={this.state.checked} id={name.replace(' ', '-')} type='checkbox' onChange={this.handleCheckbox} />
        <span className={css(this.stylesheet.text)}>{name}</span>
      </label>
    )
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

Checkbox.defaultProps = {
  value: 'on',
  checked: false
}

Checkbox.contextTypes = {
  colors: PropTypes.object
}

export default Checkbox
