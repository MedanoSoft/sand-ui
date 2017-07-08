import { StyleSheet } from 'aphrodite/no-important'

export default function (colorscheme) {
  const { secondary, gray, lightGray, white } = colorscheme
  return StyleSheet.create({
    caption: {
      minWidth: 150,
      height: '2.5rem',
      fontSize: '1.15rem',
      color: white.default,
      backgroundColor: secondary.default,
      border: `5px solid ${secondary.default}`,
      borderRadius: 5,
      margin: '7px 15px',
      boxSizing: 'border-box',
      transition: 'opacity 0.25s linear',
      ':hover': {
        opacity: 0.8
      },
      ':active': {
        backgroundColor: secondary.darker,
        border: `5px solid ${secondary.darker}`
      },
      ':focus': {
        outline: 'none'
      }
    },
    listVisible: {
      visibility: 'visible',
      backgroundColor: lightGray.default,
      minWidth: 150,
      marginTop: 10,
      boxSizing: 'border-box',
      padding: 0,
      position: 'relative',
      listStyleType: 'none',
      borderRadius: 5
    },
    listInvisible: {
      visibility: 'none',
      opacity: 0,
      position: 'fixed',
      zIndex: -100
    },
    item: {
      padding: '7px 5px',
      boxSizing: 'border-box',
      cursor: 'pointer',
      transition: 'background-color 0.1s linear',
      ':hover': {
        backgroundColor: gray.default
      },
      ':first-child': {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
      },
      ':last-child': {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
      }
    },
    text: {
      color: '#555',
      textDecoration: 'none',
      fontSize: '0.85rem'
    },
    wrapper: {
      margin: '7px 15px',
      padding: 0
    }
  })
}
