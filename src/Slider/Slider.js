import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'

import styleGenerator from './styles'

/**
 * This is a stylished form of `<input type="range" />` see MDN documentation about.
 */
class Slider extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
      percent: 0
    }
    this.stylesheet = styleGenerator(context.colors)
    this.handleSlider = this.handleSlider.bind(this)
  }

  componentWillReceiveProps (nextProps, nextState) {
    if (nextState.percent !== this.state.percent) {
      this.setState({
        percent: nextState.percent
      })
    }
  }

  handleSlider (e) {
    const percent = e.target.value
    this.setState({ percent })
    if (this.props.onChange) { this.props.onChange(percent) }
  }

  render () {
    const { percent } = this.state
    return (
      <div className={css(this.stylesheet.container)}>
        <input {...this.props} type='range' value={percent} className={css(this.stylesheet.bar)} onChange={this.handleSlider} />
      </div>
    )
  }
}

Slider.propTypes = {
  /**
   * Range separation
   */
  step: PropTypes.number,
  /**
   * Called when slider change it's state
   */
  onChange: PropTypes.func,
  /**
   * Custom styles to add
   */
  style: PropTypes.object
}

Slider.defaultProps = {
  step: 1
}

Slider.contextTypes = {
  colors: PropTypes.object
}

export default Slider
