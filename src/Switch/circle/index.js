import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'

import styleGenerator from './styles'

class Switch extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
      status: this.props.status
    }
    this.stylesheet = styleGenerator(context.colors)
    this.changeStatus = this.changeStatus.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  changeStatus (e) {
    this.setState({
      status: !this.state.status
    })
  }

  handleChange (e) {
    if (this.props.onChange) {
      this.props.onChange(status)
    }
  }

  render () {
    const { status } = this.state
    const passedProps = {
      ...this.props
    }
    delete (passedProps.status)
    delete (passedProps.onChange)
    return (
      <figure className={css(this.stylesheet.container)} onClick={this.changeStatus}>
        <div className={css(this.stylesheet.flipper, this.state.status ? this.stylesheet.flipperOn : this.stylesheet.flipperOff)}>
          <span className={css(this.stylesheet.on)}>ON</span>
          <input {...passedProps} type='checkbox' checked={status} className={css(this.stylesheet.ball, this.state.status ? this.stylesheet.ballOn : this.stylesheet.ballOff)} onChange={this.handleChange} />
          <span className={css(this.stylesheet.off)}>OFF</span>
        </div>
      </figure>
    )
  }
}

Switch.propTypes = {
  name: PropTypes.string,
  status: PropTypes.bool.isRequired,
  onChange: PropTypes.func
}

Switch.defaultProps = {
  status: true
}

Switch.contextTypes = {
  colors: PropTypes.object
}

export default Switch
