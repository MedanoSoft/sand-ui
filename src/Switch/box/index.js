import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'

import defaultStyles from './styles'

class Switch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status: this.props.status
    }

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
    console.log(status)
    const passedProps = {
      ...this.props
    }
    delete (passedProps.status, passedProps.onChange)
    return (
      <figure className={css(defaultStyles.container)} onClick={this.changeStatus}>
        <div className={css(defaultStyles.flipper, this.state.status ? defaultStyles.flipperOn : defaultStyles.flipperOff)}>
          <span className={css(defaultStyles.on)}>✓</span>
          <input {...passedProps} type='checkbox' checked={status} className={css(defaultStyles.box, this.state.status ? defaultStyles.boxOn : defaultStyles.boxOff)} onChange={this.handleChange} />
          <span className={css(defaultStyles.off)}>&times;</span>
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

export default Switch
