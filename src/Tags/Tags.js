import React, { Component } from 'react'

import PropTypes from 'prop-types'

import defaultStyles from './styles'

import { css } from 'aphrodite/no-important'

import uidCreator from '../utils/uid'

class Tags extends Component {
  constructor (props) {
    super(props)
    this.state = {
      values: props.values
    }

    this.deleteTag = this.deleteTag.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setDatalist = this.setDatalist.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.values !== nextProps.values) {
      this.setState({
        values: nextProps.values
      })
    }
  }

  deleteTag (i) {
    console.log(i)
    this.setState((state) => ({
      values: [
        ...state.values.slice(0, i),
        ...state.values.slice(i + 1)
      ]
    }))
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.values !== this.state.values) {
      if (this.props.onUpdate) {
        this.props.onUpdate(this.state.values)
      }
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    if (!this.props.repeatValues || !this.state.values.includes(this.input.value)) {
      this.setState({
        values: [...this.state.values, this.input.value]
      })
    }
    this.input.value = ''
  }

  setDatalist (id) {
    const { list } = this.props
    return (
      <datalist id={id}>
        {list.map((opt, i) => (
          <option key={i} value={opt} />
				))}
      </datalist>
    )
  }

  render () {
    const { values } = this.state
    const uid = uidCreator()
    const passedProps = {
      ...this.props
    }
    delete (passedProps.onUpdate)
    delete (passedProps.values)
    delete (passedProps.list)

    return (
      <section {...passedProps} className={css(defaultStyles.wrapper)}>
        {this.props.list && this.setDatalist(uid)}
        {values.map((tag, i) => (
          <span key={i} className={css(defaultStyles.label)} onClick={() => this.deleteTag(i)}>{tag}</span>
				))}
        <form onSubmit={this.handleSubmit} className={css(defaultStyles.form)}>
          <input
            type='text'
            className={css(defaultStyles.input)}
            list={this.props.list ? uid : undefined}
            ref={(input) => this.input = input} />
        </form>
      </section>
    )
  }
}

Tags.propTypes = {
  values: PropTypes.array,
  list: PropTypes.array,
  onUpdate: PropTypes.func
}

Tags.defaultProps = {
  values: []
}

export default Tags
