import React, { Component } from 'react'

import PropTypes from 'prop-types'

import styleGenerator from './styles'

import { css } from 'aphrodite/no-important'

class Dropdown extends Component {
  constructor (props, context) {
    super(props)

    this.state = {
      toggleList: false
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
    return (
      <div className={css(this.stylesheet.wrapper)}>
        <button className={css(this.stylesheet.caption)} onClick={this.handleClick}>{label}</button>
        <ul {...passedProps} className={css((toggleList) ? this.stylesheet.listVisible : this.stylesheet.listInvisible)}>
          {this.setList()}
        </ul>
      </div>
    )
  }
}

Dropdown.propTypes = {
  list: PropTypes.array.isRequired,
  label: PropTypes.string
}

Dropdown.defaultProps = {
  list: []
}

Dropdown.contextTypes = {
  colors: PropTypes.object
}

export default Dropdown
