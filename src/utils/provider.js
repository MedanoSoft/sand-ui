import React, { Component } from 'react'

import PropTypes from 'prop-types'

import defaultColors, { colorBrightandDark } from '../globals/colors'

class UIProvider extends Component {
  getChildContext () {
    const colorscheme = {...defaultColors}

    const theme = this.props

    Object.keys(theme)
    .filter(key => Object.keys(defaultColors).includes(key))
    .forEach(colorName => {
      colorscheme[colorName] = colorBrightandDark(theme[colorName])
    })

    return {
      colors: colorscheme
    }
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

UIProvider.childContextTypes = {
  colors: PropTypes.object
}

UIProvider.propTypes = {
  theme: PropTypes.object
}

UIProvider.defaultProps = {
  theme: {}
}

export default UIProvider
