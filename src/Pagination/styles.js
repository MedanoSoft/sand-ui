import { StyleSheet } from 'aphrodite/no-important'


export default function(colorscheme) {
  const { secondary, white, gray } = colorscheme
  return StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      padding: 0,
      margin: 'auto'
    },
    list: {
      textDecoration: 'none',
      listStyleType: 'none',
      height: '3em',
      padding: '5px 10px',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      backgroundColor: gray.brighter,
      cursor: 'pointer',
      color: white.default,
      transition: 'background-color 0.25s linear',
      ':hover': {
      	backgroundColor: secondary.brighter
      },
      ':focus': {
      	backgroundColor: secondary.default,
      	outline: 'none'
      },
      ':active': {
      	backgroundColor: secondary.default,
      	transition: 'background-color 0s'
      }
    },
    back: {
    	borderRadius: '7px 0px 0px 7px'
    },
    next: {
    	borderRadius: '0px 7px 7px 0px'
    }
  })
}
