import { gray, secondary, font, green, red } from '../globals/colors';

import { StyleSheet } from 'react-look';

function inputGenerator(color, otherStyles={}) {
  return Object.assign({}, {
    width: '25%',
    height: '2.5rem',
    boxSizing: 'border-box',
    border: `2px solid ${color}`,
    borderRadius: 10,
    color,
    fontSize: '16px',
    padding: '0.75rem 1rem',
    marginTop: 7,
    marginBottom: 7,
    marginLeft: 15,
    marginRight: 15,
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

export default StyleSheet.create({
  active: inputGenerator(gray, {
    color: font,
    ':focus': {
      outline: 'none',
      border: `2px solid ${secondary}`
    }
  }),
  success: inputGenerator(green),
  error: inputGenerator(red),
  disabled: inputGenerator(gray, {
    backgroundColor: 'rgba(240, 240, 240, 0.7)'
  })
});