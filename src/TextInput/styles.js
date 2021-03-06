import { StyleSheet } from 'aphrodite'

function inputGenerator (color, otherStyles = {}) {
  return Object.assign({}, {
    width: '100%',
    height: 'auto',
    boxSizing: 'border-box',
    border: `2px solid ${color.default}`,
    borderRadius: 10,
    color: color.default,
    fontSize: '16px',
    padding: '0.5rem',
    boxShadow: 'none',
    transition: 'border 0.15s linear',
    ':focus': {
      outline: 'none'
    },
    '::-webkit-input-placeholder': {
      color: color.default
    },
    ':-moz-placeholder': {
      color: color.default
    },
    '::-moz-placeholder': {
      color: color.default
    },
    ':-ms-input-placeholder': {
      color: color.default
    }
  }, otherStyles)
}

export default function (colorscheme) {
  colorscheme = colorscheme || require('../globals/colors').default
  const { gray, lightGray, secondary, font, green, red } = colorscheme
  return StyleSheet.create({
    active: inputGenerator(gray, {
      color: font,
      ':focus': {
        outline: 'none',
        border: `2px solid ${secondary.default}`
      }
    }),
    success: inputGenerator(green),
    error: inputGenerator(red),
    disabled: inputGenerator(gray, {
      backgroundColor: lightGray.default
    }),
    leftIcon: {
      textIndent: '2.2em'
    },
    icon: {
      marginLeft: '-99%',
      width: '1.5em',
      display: 'inline',
      position: 'relative'
    },
    wrapper: {
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center'
    }
  })
}
