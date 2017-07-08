import React, { Component } from 'react'

import PropTypes from 'prop-types'

import styleGenerator from './styles'

import { css } from 'aphrodite/no-important'

class Select extends Component {
  constructor (props, context) {
    super(props)

    this.stylesheet = styleGenerator(context.colors)
    this.setOptions = this.setOptions.bind(this)
  }

  setOptions () {
    return this.props.options.map((node, i) => (
      <option key={i} className={css(this.stylesheet.item)} value={(typeof node === typeof {}) ? node.value : node}>{node.name || node}</option>
		))
  }

  render () {
  	const { name } = this.props
  	const passedProps = {
    ...this.props
  }
    delete (passedProps.options)

    return (
      <select {...passedProps} name={name} className={css(this.stylesheet.caption)}>
        {this.setOptions()}
      </select>
    )
  }
}

Select.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string
}

Select.defaultProps = {
  options: []
}

Select.contextTypes = {
  colors: PropTypes.object
}

export default Select
