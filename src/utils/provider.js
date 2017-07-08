import React, { Component } from 'react'

import PropTypes from 'prop-types'

import defaultColors, { colorBrightandDark } from '../globals/colors'

class UIProvider extends Component {
  getChildContext() {

    const colorscheme = {...defaultColors}

    Object.keys(this.props.theme)
    .filter(key => Object.keys(defaultColors).includes(key))
    .forEach(colorName => {
      colorscheme[colorName] = colorBrightandDark(this.props.theme[colorName])
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


export default UIProvider
