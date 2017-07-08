import { StyleSheet } from 'aphrodite/no-important'

export default function (colorscheme) {
  const { secondary, font, gray, lightGray, white } = colorscheme
  return StyleSheet.create({
    caption: {
      appearance: 'none',
      minWidth: 150,
      height: '2.5rem',
      fontSize: '1.15rem',
      color: white.default,
      backgroundColor: secondary.default,
      border: `5px solid ${secondary.default}`,
      borderRadius: 5,
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
      },
      '::ms-expand': {
        display: 'none'
      }
    },
    item: {
      appearance: 'button',
      background: lightGray.default,
      color: '#555',
      padding: '7px 5px',
      cursor: 'pointer',
      boxSizing: 'border-box',
      transition: 'background-color 0.1s linear',
      ':hover': {
        background: `${gray.default} !important`
      },
      ':active': {
        background: gray.default
      }
    }
  })
}
