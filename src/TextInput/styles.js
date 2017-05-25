import { gray, secondary, font, green, red } from '../globals/colors';

import { StyleSheet } from 'aphrodite/no-important';

function inputGenerator(color, otherStyles={}) {
  return Object.assign({}, {
    width: '100%',
    height: 'auto',
    border: 'none',
    display: 'inline',
    color,
    fontSize: '16px',
    boxShadow: 'none',
    transition: 'border 0.15s linear',
    ':focus': {
      outline: 'none'
    },
    '::-webkit-input-placeholder': {
      color
    },
    ':-moz-placeholder': {
      color
    },
    '::-moz-placeholder': {
      color
    },
    ':-ms-input-placeholder': {
      color
    }
  }, otherStyles);
}

function wrapperGenerator(color, otherStyles={}) {
  return Object.assign({}, {
    width: '100%',
    height: 'auto',
    boxSizing: 'border-box',
    border: `2px solid ${color}`,
    borderRadius: 10,
    color,
    padding: '0.5rem',
    boxShadow: 'none',
    transition: 'border 0.15s linear',
    overflow: 'hidden'
  }, otherStyles);
}

export default StyleSheet.create({
  active: inputGenerator(gray, {
    color: font
  }),
  success: inputGenerator(green),
  error: inputGenerator(red),
  disabled: inputGenerator(gray, {
    backgroundColor: 'rgba(240, 240, 240, 0.7)'
  }),
  wrapperActive: wrapperGenerator(gray, {
    color: font,
    ':focus': {
      outline: 'none',
      border: `2px solid ${secondary}`
    }
  }),
  wrapperSuccess: wrapperGenerator(green),
  wrapperError: wrapperGenerator(red),
  wrapperDisabled: wrapperGenerator(gray, {
    backgroundColor: 'rgba(240, 240, 240, 0.7)'
  }),
  leftIcon: {
    textIndent: '2em'
  }
});
