import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite/no-important'

import styleGenerator from './styles'

/**
 * Horizontal light bar for showing progress.
 */
class ProgressBar extends Component {
  constructor (props, context) {
    super(props)

    this.stylesheet = styleGenerator(context.colors)
  }
  render () {
    const { percent, type } = this.props
    const passedProps = { ...this.props }
    delete (passedProps.percent)
    delete (passedProps.type)
    return (
      <div {...passedProps} className={css(this.stylesheet.wrapper)}>
        <div className={css(this.stylesheet[type])} style={{width: `${percent}%`}} />
      </div>
    )
  }
}

ProgressBar.propTypes = {
  /**
   * Percent of progress
   */
  percent: PropTypes.number,
  /**
   * 	Progress bar colorscheme
   */
  type: PropTypes.string,
  /**
   * Custom styles to add
   */
  style: PropTypes.object
}

ProgressBar.defaultProps = {
  percent: 25,
  type: 'default'
}

ProgressBar.contextTypes = {
  colors: PropTypes.object
}

export default ProgressBar
