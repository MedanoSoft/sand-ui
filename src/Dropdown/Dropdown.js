import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite/no-important'

import styleGenerator from './styles'

/**
 * List of items like a list-menu, Dropdown is not the same as Select component.
 */
class Dropdown extends Component {
  constructor (props, context) {
    super(props)

    this.state = {
      toggleList: (props.hasOwnProperty('visible')) ? props.visible : false
    }

    this.stylesheet = styleGenerator(context.colors)

    this.setList = this.setList.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  setList () {
    const { list } = this.props
    return list.map((node, i) => (
      <li key={i} className={css(this.stylesheet.item)}>
        {(typeof node === typeof {})
          ? (<a {...node.props} className={css(this.stylesheet.text)} href={node.link || '#'}>{node.name}</a>)
          : (<span key={i} className={css(this.stylesheet.text)}>{node}</span>)
        }
      </li>
      ))
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.hasOwnProperty('visible')) {
      this.setState({ toggleList: nextProps.visible })
    }
  }

  handleClick () {
    this.setState((state) => ({
      toggleList: !state.toggleList
    }))
  }

  render () {
    const { label } = this.props
    const { toggleList } = this.state
    const passedProps = {
      ...this.props
    }
    delete (passedProps.label)
    delete (passedProps.list)
    delete (passedProps.visible)
    delete (passedProps.buttonStyle)

    return (
      <div className={css(this.stylesheet.wrapper)}>
        <button style={this.props.buttonStyle} className={css(this.stylesheet.caption)} onClick={this.handleClick}>{label}</button>
        <ul {...passedProps} className={css((toggleList) ? this.stylesheet.listVisible : this.stylesheet.listInvisible)}>
          {this.setList()}
        </ul>
      </div>
    )
  }
}

Dropdown.propTypes = {
  /**
   * List of items to show
   */
  list: PropTypes.array.isRequired,
  /**
   * Label for flag button
   */
  label: PropTypes.string,
  /**
   * Toggle list
   */
  visible: PropTypes.bool,
  /**
   * Custom styles for flag button
   */
  buttonStyle: PropTypes.object
}

Dropdown.defaultProps = {
  list: []
}

Dropdown.contextTypes = {
  colors: PropTypes.object
}

export default Dropdown
