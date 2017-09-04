import colorProps from 'color-props'

import { StyleSheet } from 'aphrodite/no-important'

function buttonGenerator (backgroundColor, borderColor, otherStyles = {}) {
  borderColor = borderColor || backgroundColor.default
  return Object.assign({}, {
    display: 'flex',
    border: `3px solid ${borderColor}`,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    height: 'auto',
    boxSizing: 'border-box',
    borderRadius: '10px',
    fontSize: '1.15rem',
    cursor: 'pointer',
    padding: '0.07rem 0.15rem',
    color: '#FFF',
    textDecoration: 'none',
    transition: 'all 0.25s linear',
    backgroundColor: backgroundColor.default,
    ':hover': {
      backgroundColor: backgroundColor.brighter,
      border: `3px solid ${backgroundColor.brighter}`
    },
    ':focus': {
      outline: 'none',
      backgroundColor: backgroundColor.brighter,
      border: `3px solid ${backgroundColor.brighter}`
    },
    ':active': {
      backgroundColor: backgroundColor.darker,
      border: `3px solid ${backgroundColor.darker}`
    }
  }, otherStyles)
}

function lightButtonGenerator (backgroundColor, otherStyles = {}) {
  const bgProp = colorProps(backgroundColor.brighter)

  return Object.assign({}, {
    display: 'flex',
    border: `1px solid ${backgroundColor.default}`,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'no-wrap',
    height: 'auto',
    boxSizing: 'border-box',
    borderRadius: '10px',
    fontSize: '1.15rem',
    cursor: 'pointer',
    padding: '0.07rem 0.15rem',
    color: backgroundColor.default,
    textDecoration: 'none',
    transition: 'all 0.25s linear',
    background: 'none',
    ':hover': {
      backgroundColor: `rgba(${bgProp.r}, ${bgProp.g}, ${bgProp.b}, 0.3)`
    },
    ':focus': {
      outline: 'none',
      backgroundColor: `rgba(${bgProp.r}, ${bgProp.g}, ${bgProp.b}, 0.3)`
    },
    ':active': {
      backgroundColor: `rgba(${bgProp.r}, ${bgProp.g}, ${bgProp.b}, 0.7)`
    }
  }, otherStyles)
}

export default function (colorscheme) {
  return StyleSheet.create({
    active: buttonGenerator(colorscheme.secondary),
    success: buttonGenerator(colorscheme.green),
    warning: buttonGenerator(colorscheme.yellow),
    danger: buttonGenerator(colorscheme.red),
    inverse: buttonGenerator(colorscheme.primary),
    disabled: buttonGenerator(colorscheme.gray, colorscheme.gray.default, { cursor: 'default' }),
    info: buttonGenerator(colorscheme.blue),
    'light-active': lightButtonGenerator(colorscheme.secondary),
    'light-success': lightButtonGenerator(colorscheme.green),
    'light-warning': lightButtonGenerator(colorscheme.yellow),
    'light-danger': lightButtonGenerator(colorscheme.red),
    'light-inverse': lightButtonGenerator(colorscheme.primary),
    'light-disabled': lightButtonGenerator(colorscheme.gray, colorscheme.gray.default, { cursor: 'default' }),
    'light-info': lightButtonGenerator(colorscheme.blue)
  })
}
