import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'

import defaultStyles from './styles'

import Icon from '../Icon'

class Pagination extends Component {
  render () {
    return (
      <nav>
        <ul>
          <li>
            <Icon />
          </li>
          <li>
            <Icon />
          </li>
        </ul>
      </nav>
    )
  }
}

export default Pagination
