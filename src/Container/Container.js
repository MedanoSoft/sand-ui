import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'

import styleGenerator from './styles'

class Container extends Component {
  constructor (props, context) {
    super(props)
    this.stylesheet = styleGenerator(context.colors)
    this.setDistribution = this.setDistribution.bind(this)
    this.setAlignment = this.setAlignment.bind(this)
    this.setCSS = this.setCSS.bind(this)
  }

  setDistribution (distribution, size) {
    switch (distribution) {
      case 'start':
        return this.stylesheet[`start${size.toUpperCase()}`]
      case 'center':
        return this.stylesheet[`center${size.toUpperCase()}`]
      case 'end':
        return this.stylesheet[`end${size.toUpperCase()}`]
      case 'around':
        return this.stylesheet[`around${size.toUpperCase()}`]
      case 'between':
        return this.stylesheet[`between${size.toUpperCase()}`]
      default:
        return this.stylesheet[`around${size.toUpperCase()}`]
    }
  }

  setAlignment (align, size) {
    switch (align) {
      case 'top':
        return this.stylesheet[`top${size.toUpperCase()}`]
      case 'middle':
        return this.stylesheet[`middle${size.toUpperCase()}`]
      case 'bottom':
        return this.stylesheet[`bottom${size.toUpperCase()}`]
      default:
        return this.stylesheet[`top${size.toUpperCase()}`]
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
      this.stylesheet.container,
      direction === 'row' ? this.stylesheet.row : this.stylesheet.column,
      this.props.fluid && this.stylesheet.fluid,
      this.props.reverse && direction === 'row'
      ? this.stylesheet.rowReverse
      : this.stylesheet.columnReverse,
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

Container.contextTypes = {
  colors: PropTypes.object
}

export default Container
