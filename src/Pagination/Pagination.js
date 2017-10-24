import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite/no-important'

import styleGenerator from './styles'
import Icon from '../Icon'

/**
 * Navigation with this simple pagination component.
 */
class Pagination extends Component {
  constructor (props, context) {
    super(props)

    this.state = {
      active: props.active
    }

    this.stylesheet = styleGenerator(context.colors)
    this.listCreator = this.listCreator.bind(this)
    this.defaultList = this.defaultList.bind(this)
    this.setPages = this.setPages.bind(this)
    this.handlePagination = this.handlePagination.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.active !== this.state.active) {
      this.setState({
        active: nextProps.active
      })
    }
  }

  listCreator (index) {
    return (
      <li key={index} tabIndex={0} className={css(this.stylesheet.list)} onClick={() => this.handlePagination(index)}>
        <span>{index}</span>
      </li>
    )
  }

  defaultList () {
    return (
      <li tabIndex={0} className={css(this.stylesheet.list)} onClick={this.handlePagination}>
        <span>All</span>
      </li>
    )
  }

  handlePagination (index = true) {
    if (index) {
      this.setState({
        active: index
      })
    }
    if (this.props.onPagination) {
      this.props.onPagination(index)
    }
  }

  setPages () {
    const { pages } = this.props
    const { active } = this.state

    const list = []
    if (pages > 10) { // Bigger list items
      if (active && active > 6 && active < (pages - 3)) {
        // In the middle of the list
        for (let i = 1; i < 3; i++) { list.push(this.listCreator(i)) }
        list.push(( // Separator 1
          <li className={css(this.stylesheet.list)} key='middledots1'>
            <span>...</span>
          </li>
        ))
        for (let i = active - 1; i < active + 2; i++) { list.push(this.listCreator(i)) }
        list.push(( // Separator 2
          <li className={css(this.stylesheet.list)} key='middledots2'>
            <span>...</span>
          </li>
        ))
        for (let i = pages - 1; i < pages + 1; i++) { list.push(this.listCreator(i)) }
      } else {
        // At the beginning (or end) of the list
        for (let i = 1; i < 8; i++) { list.push(this.listCreator(i)) }

        list.push(( // Separator
          <li className={css(this.stylesheet.list)} key='middledots'>
            <span>...</span>
          </li>
        ))
        for (let i = pages - 2; i < pages + 1; i++) { list.push(this.listCreator(i)) }
      }
    } else {
      for (let i = 1; i < pages + 1; i++) {
        list.push(this.listCreator(i))
      }
    }

    return list
  }

  render () {
    const { pages } = this.props
    return (
      <nav role='navigation'>
        <ul className={css(this.stylesheet.container)}>
          <li className={css(this.stylesheet.list, this.stylesheet.back)} tabIndex={0} onClick={this.props.onLeftClick}>
            <Icon name='chevron-left' color='white' size='1rem' />
          </li>
          {pages === 0 ? this.defaultList() : this.setPages()}
          <li className={css(this.stylesheet.list, this.stylesheet.next)} tabIndex={0} onClick={this.props.onRightClick}>
            <Icon name='chevron-right' color='white' />
          </li>
        </ul>
      </nav>
    )
  }
}

Pagination.propTypes = {
  /**
   * Called when user selects the left button
   */
  onLeftClick: PropTypes.func,
  /**
   * Called when user selects the right button
   */
  onRightClick: PropTypes.func,
  /**
   * 	Called when user selects an option, return the option index
   */
  onPagination: PropTypes.func,
  /**
   * Total of list options to show, default: 0, which means All
   */
  pages: PropTypes.number.isRequired,
  /**
   * Index of the active list option
   */
  active: PropTypes.number
}

Pagination.defaultProps = {
  pages: 0
}

Pagination.contextTypes = {
  colors: PropTypes.object
}

export default Pagination
