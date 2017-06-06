import { primary, secondary, gray, lightGray, white } from '../../globals/colors'

import { StyleSheet } from 'aphrodite/no-important'

function boxGenerator (color, otherStyles = {}) {
  return Object.assign({
    backgroundColor: color.default,
    ':hover': {
      backgroundColor: color.brighter
    },
    ':focus': {
      outline: 'none',
      backgroundColor: color.darker
    },
    ':active': {
      backgroundColor: color.darker
    }
  }, otherStyles)
}

export default StyleSheet.create({
  box: {
    appearance: 'none',
    width: 30,
    height: 30,
    position: 'absolute',
    zIndex: 2,
    cursor: 'pointer',
    transition: 'all 0.15s linear',
    marginTop: -0.25
  },
  boxOn: boxGenerator(secondary, {
    marginLeft: 40
  }),
  boxOff: boxGenerator(gray, {
    backgroundColor: gray.darker,
    marginLeft: 70
  }),
  on: {
    position: 'absolute',
    display: 'inline',
    boxSizing: 'border-box',
    width: 70,
    height: 30,
    backgroundColor: primary.darker,
    color: secondary.default,
    textAlign: 'left',
    fontWeight: 700,
    fontSize: 15,
    paddingTop: 6,
    paddingLeft: 12
  },
  off: {
    position: 'absolute',
    display: 'inline',
    boxSizing: 'border-box',
    width: 70,
    height: 30,
    marginLeft: 70,
    backgroundColor: lightGray.darker,
    color: white.default,
    textAlign: 'right',
    fontWeight: 700,
    fontSize: 15,
    paddingTop: 6,
    paddingRight: 15
  },
  container: {
    width: 70,
    height: 30,
    position: 'relative',
    overflow: 'hidden',
    margin: '7px 15px',
    cursor: 'pointer',
    borderRadius: 7
  },
  flipper: {
    position: 'relative',
    transition: 'all 0.2s linear'
  },
  flipperOn: {
    left: 0
  },
  flipperOff: {
    left: -70
  }
})

// on 40px left
