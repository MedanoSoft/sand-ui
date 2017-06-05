import * as colors from '../globals/colors';

import { StyleSheet } from 'aphrodite/no-important';

function buttonGenerator(backgroundColor, borderColor, otherStyles={}) {
  borderColor = borderColor || backgroundColor.default;
  return Object.assign({}, {
    display: 'flex',
    border: `3px solid ${borderColor}`,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
  }, otherStyles);
}

export default StyleSheet.create({
  active: buttonGenerator(colors.secondary),
  success: buttonGenerator(colors.green),
  warning: buttonGenerator(colors.yellow),
  danger: buttonGenerator(colors.red),
  inverse: buttonGenerator(colors.primary),
  disabled: buttonGenerator(colors.gray, colors.gray.default, { cursor: 'default' }),
  info: buttonGenerator(colors.blue)
});
