import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'

import defaultStyles from './styles'

class Box extends Component {
  constructor () {
    super()
    this.setCSS = this.setCSS.bind(this)
  }

  setCSS () {
    const {
      xs,
      xsOffset,
      sm,
      smOffset,
      md,
      mdOffset,
      lg,
      lgOffset
    } = this.props

    return css(
      defaultStyles.col,
      xs && defaultStyles[`colXS${xs}`],
      sm && defaultStyles[`colSM${sm}`],
      md && defaultStyles[`colMD${md}`],
      lg && defaultStyles[`colLG${lg}`],
      xsOffset && defaultStyles[`colXSOffset${xs}`],
      smOffset && defaultStyles[`colSMOffset${sm}`],
      mdOffset && defaultStyles[`colMDOffset${md}`],
      lgOffset && defaultStyles[`colLGOffset${lg}`]
    )
  }

  render () {
    const passedProps = {
      ...this.props
    }
    delete (
      passedProps.xs, passedProps.xsOffset,
      passedProps.sm, passedProps.smOffset,
      passedProps.md, passedProps.mdOffset,
      passedProps.lg, passedProps.lgOffset
    )

    return (
      <article {...this.props} className={this.setCSS()}>
        {this.props.children}
      </article>
    )
  }
}

Box.propTypes = {
  xs: PropTypes.number,
  xsOffset: PropTypes.number,
  sm: PropTypes.number,
  smOffset: PropTypes.number,
  md: PropTypes.number,
  mdOffset: PropTypes.number,
  lg: PropTypes.number,
  lgOffset: PropTypes.number
}

Box.defaultProps = {
  xs: 0
}
export default Box
