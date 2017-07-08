import { StyleSheet } from 'aphrodite/no-important'

export default function (colorscheme) {
  const { primary, secondary, gray, white } = colorscheme

  return StyleSheet.create({
    bar: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 6px',
      backgroundColor: primary.default,
      color: white.default,
      border: `6px solid ${primary.default}`,
      borderRadius: 6,
      boxSizing: 'border-box',
      minHeight: '10%',
      textDecoration: 'none'
    },
    title: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: 0.35
    },
    searchbar: {
      alignSelf: 'right',
      '@media only screen and (max-width: 25rem)': {
        display: 'none'
      }
    },
    searchInput: {
      minWidth: 150,
      fontSize: 15,
      backgroundColor: primary.darker,
      borderColor: primary.darker,
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: 5,
      boxSizing: 'border-box',
      padding: '5px 10px',
      color: gray.default,
      transition: 'all 0.25s linear',
      '::-webkit-input-placeholder': {
        color: gray.default
      },
      ':-moz-placeholder': {
        color: gray.default
      },
      '::-moz-placeholder': {
        color: gray.default
      },
      ':-ms-input-placeholder': {
        color: gray.default
      },
      ':focus': {
        outline: 'none',
        borderColor: secondary.default,
        color: secondary.default,
        '::-webkit-input-placeholder': {
          color: secondary.default
        },
        ':-moz-placeholder': {
          color: secondary.default
        },
        '::-moz-placeholder': {
          color: secondary.default
        },
        ':-ms-input-placeholder': {
          color: secondary.default
        }
      }
    }
  })
}
