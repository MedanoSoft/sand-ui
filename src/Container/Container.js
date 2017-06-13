import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'

import defaultStyles from './styles'

class Container extends Component {
  constructor () {
    super()

    this.setCSS = this.setCSS.bind(this)
  }

  setDistribution (distribution, size) {
    switch (distribution) {
      case 'start':
        return defaultStyles[`start${size.toUpperCase()}`]
      case 'center':
        return defaultStyles[`center${size.toUpperCase()}`]
      case 'end':
        return defaultStyles[`end${size.toUpperCase()}`]
      case 'around':
        return defaultStyles[`around${size.toUpperCase()}`]
      case 'between':
        return defaultStyles[`between${size.toUpperCase()}`]
      default:
        return defaultStyles[`around${size.toUpperCase()}`]
    }
  }

  setAlignment (align, size) {
    switch (align) {
      case 'top':
        return defaultStyles[`top${size.toUpperCase()}`]
      case 'middle':
        return defaultStyles[`middle${size.toUpperCase()}`]
      case 'bottom':
        return defaultStyles[`bottom${size.toUpperCase()}`]
      default:
        return defaultStyles[`top${size.toUpperCase()}`]
    }
  }

  setCSS () {
    const {
      direction,
      dist,
      smDist,
      mdDist,
      lgDist,
      align,
      smAlign,
      mdAlign,
      lgAlign
    } = this.props

    return css(
      defaultStyles.container,
      direction === 'row' ? defaultStyles.row : defaultStyles.column,
      this.props.fluid && defaultStyles.fluid,
      this.props.reverse && direction === 'row'
      ? defaultStyles.rowReverse
      : defaultStyles.columnReverse,
      this.setDistribution(dist, 'xs'),
      this.setDistribution(smDist, 'sm'),
      this.setDistribution(mdDist, 'md'),
      this.setDistribution(lgDist, 'lg'),
      this.setAlignment(align, 'xs'),
      this.setAlignment(smAlign, 'sm'),
      this.setAlignment(mdAlign, 'md'),
      this.setAlignment(lgAlign, 'lg')
    )
  }

  render () {
    const passedProps = { ...this.props }
    delete (passedProps.direction)
    delete (passedProps.reverse)
    delete (passedProps.fluid)
    delete (passedProps.dist)
    delete (passedProps.smDist)
    delete (passedProps.mdDist)
    delete (passedProps.lgDist)
    delete (passedProps.align)
    delete (passedProps.smAlign)
    delete (passedProps.mdAlign)
    delete (passedProps.lgAlign)
    return (
      <div {...passedProps} className={this.setCSS()}>
        {this.props.children}
      </div>
    )
  }
}

Container.propTypes = {
  direction: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  fluid: PropTypes.bool,
  dist: PropTypes.string,
  smDist: PropTypes.string,
  mdDist: PropTypes.string,
  lgDist: PropTypes.string,
  align: PropTypes.string,
  smAlign: PropTypes.string,
  mdAlign: PropTypes.string,
  lgAlign: PropTypes.string
}

Container.defaultProps = {
  direction: 'row',
  reverse: false,
  fluid: false,
  dist: 'around',
  align: 'top'
}

export default Container
