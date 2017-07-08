import { StyleSheet } from 'aphrodite/no-important'

function radioGenerator (backgroundColor, otherStyles = {}) {
  return Object.assign({}, {
    appearance: 'none',
    outline: 'none',
    width: 20,
    height: 20,
    borderRadius: '100%',
    border: `3px solid ${backgroundColor.default}`,
    cursor: 'pointer',
    background: 'none',
    backgroundColor: 'none',
    fontSize: 16,
    transition: 'background-color 0.25s linear',
    ':after': {
      opacity: 1,
      position: 'absolute',
      content: '""',
      width: 5,
      height: 5,
      margin: '7px',
      backgroundColor: backgroundColor.default,
      transform: 'translate(-50%, -50%)',
      border: `1px solid ${backgroundColor.default}`,
      borderRadius: '100%'
    },
    ':focus': {
      outline: 'none'
    }
  }, otherStyles)
}

export default function(colorscheme) {
  const { gray, font, secondary } = colorscheme
  return StyleSheet.create({
    wrapper: {
      margin: '7px 15px',
      color: font,
      fontSize: 16,
      minHeight: 30,
      display: 'block'
    },
    active: radioGenerator(secondary),
    inactive: radioGenerator(gray, {
      ':after': {
        opacity: 0
      },
      ':hover': {
        border: `3px solid ${gray.default}`,
        ':after': {
          opacity: 1,
          position: 'absolute',
          content: '""',
          width: 5,
          height: 5,
          margin: '7px',
          backgroundColor: gray.default,
          transform: 'translate(-50%, -50%)',
          border: `1px solid ${gray.default}`,
          borderRadius: '100%'
        }
      }
    }),
    disabled: radioGenerator(gray, {
      cursor: 'default',
      backgroundColor: gray.brighter,
      ':after': {
        opacity: 0
      }
    }),
    disabledChecked: radioGenerator(gray, {
      cursor: 'default',
      backgroundColor: gray.brighter
    }),
    text: {
      position: 'relative',
      top: -8
    }
  })
}
