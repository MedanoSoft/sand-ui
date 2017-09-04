import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'

import styleGenerator from './styles'

class Navbar extends Component {
  constructor (props, context) {
    super(props)

    this.stylesheet = styleGenerator(context.colors)
    this.setSearchbar = this.setSearchbar.bind(this)
  }

  setSearchbar () {
    const { placeholder } = this.props
    return (
      <form className={css(this.stylesheet.searchbar)} onSubmit={(e) => { e.preventDefault(); this.props.onSearch(this.searchInput.value) }}>
        <input className={css(this.stylesheet.searchInput)} type='search' placeholder={placeholder} ref={(input) => this.searchInput = input} />
      </form>
    )
  }
  render () {
    const { title, middle, right } = this.props
    const passedProps = { ...this.props }
    delete (passedProps.title)
    delete (passedProps.middle)
    delete (passedProps.right)
    delete (passedProps.placeholder)
    delete (passedProps.searchbar)
    delete (passedProps.onSearch)
    return (
      <nav {...passedProps} className={css(this.stylesheet.bar)}>
        <header className={css(this.stylesheet.title)}>{title}</header>
        {middle && (<div>{middle}</div>)}
        {this.props.searchbar && this.setSearchbar()}
        {right && (<div>{right}</div>)}
      </nav>
    )
  }
}

Navbar.propTypes = {
  title: PropTypes.node,
  middle: PropTypes.node,
  right: PropTypes.node,
  searchbar: PropTypes.bool,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string
}

Navbar.defaultProps = {
  onSearch: () => {},
  searchbar: false,
  placeholder: 'Search'
}

Navbar.contextTypes = {
  colors: PropTypes.object
}

export default Navbar
