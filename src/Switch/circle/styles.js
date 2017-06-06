import { primary, secondary, gray, lightGray, white } from '../../globals/colors'

import { StyleSheet } from 'aphrodite/no-important'

function ballGenerator (color, otherStyles = {}) {
  return Object.assign({
    backgroundColor: color.default,
    marginLeft: 45,
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
  ball: {
    appearance: 'none',
    width: 20,
    height: 20,
    position: 'absolute',
    borderRadius: '100%',
    marginTop: 4.25,
    zIndex: 2,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  ballOn: ballGenerator(secondary, {
    marginLeft: 45
  }),
  ballOff: ballGenerator(gray, {
    backgroundColor: gray.darker,
    marginLeft: 75
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
    paddingLeft: 12,
    borderRadius: '50px 0px 0px 50px'
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
    paddingRight: 12,
    borderRadius: '0px 50px 50px 0px'
  },
  container: {
    width: 70,
    height: 30,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 50,
    margin: '7px 15px',
    cursor: 'pointer'
  },
  flipper: {
    position: 'relative',
    transition: 'all 0.35s linear'
  },
  flipperOn: {
    left: 0
  },
  flipperOff: {
    left: -70
  }
})

// on 40px left
