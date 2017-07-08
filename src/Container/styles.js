import { StyleSheet } from 'aphrodite/no-important'

export default function(colorscheme) {
  return StyleSheet.create({
    container: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 0,
      boxSizing: 'border-box'
    },
    fluid: {
      padding: '1rem 2rem'
    },
    nested: {
      '@media only screen and (min-width: 48rem)': {
        padding: '1rem'
      }
    },
    large: {
      '@media only screen and (min-width: 48rem)': {
        padding: '1rem'
      }
    },
    row: {
      boxSizing: 'border-box',
      display: 'flex',
      flex: '0 1 auto',
      flexDirection: 'row',
      flexWrap: 'wrap',
      '@media only screen and (min-width: 48rem)': {
        padding: '1rem'
      }
    },
    column: {
      boxSizing: 'border-box',
      display: 'flex',
      flex: '0 1 auto',
      flexDirection: 'column',
      flexWrap: 'wrap',
      '@media only screen and (min-width: 48rem)': {
        padding: '1rem'
      }
    },
    rowReverse: {
      flexDirection: 'row-reverse'
    },
    colReverse: {
      flexDirection: 'column-reverse'
    },
    startXS: {
      justifyContent: 'flex-start',
      textAlign: 'start'
    },
    centerXS: {
      justifyContent: 'center',
      textAlign: 'center'
    },
    endXS: {
      justifyContent: 'flex-end',
      textAlign: 'end'
    },
    topXS: {
      alignItems: 'flex-start'
    },
    middleXS: {
      alignItems: 'center'
    },
    bottomXS: {
      alignItems: 'flex-end'
    },
    aroundXS: {
      justifyContent: 'space-around'
    },
    betweenXS: {
      justifyContent: 'space-between'
    },
    startSM: {
      '@media only screen and (min-width: 48em)': {
        justifyContent: 'flex-start',
        textAlign: 'start'
      }
    },
    centerSM: {
      '@media only screen and (min-width: 48em)': {
        justifyContent: 'center',
        textAlign: 'center'
      }
    },
    endSM: {
      '@media only screen and (min-width: 48em)': {
        justifyContent: 'flex-end',
        textAlign: 'end'
      }
    },
    topSM: {
      '@media only screen and (min-width: 48em)': {
        alignItems: 'flex-start'
      }
    },
    middleSM: {
      '@media only screen and (min-width: 48em)': {
        alignItems: 'center'
      }
    },
    bottomSM: {
      '@media only screen and (min-width: 48em)': {
        alignItems: 'flex-end'
      }
    },
    aroundSM: {
      '@media only screen and (min-width: 48em)': {
        justifyContent: 'space-around'
      }
    },
    betweenSM: {
      '@media only screen and (min-width: 48em)': {
        justifyContent: 'space-between'
      }
    },
    startMD: {
      '@media only screen and (min-width: 64em)': {
        justifyContent: 'flex-start',
        textAlign: 'start'
      }
    },
    centerMD: {
      '@media only screen and (min-width: 64em)': {
        justifyContent: 'center',
        textAlign: 'center'
      }
    },
    endMD: {
      '@media only screen and (min-width: 64em)': {
        justifyContent: 'flex-end',
        textAlign: 'end'
      }
    },
    topMD: {
      '@media only screen and (min-width: 64em)': {
        alignItems: 'flex-start'
      }
    },
    middleMD: {
      '@media only screen and (min-width: 64em)': {
        alignItems: 'center'
      }
    },
    bottomMD: {
      '@media only screen and (min-width: 64em)': {
        alignItems: 'flex-end'
      }
    },
    aroundMD: {
      '@media only screen and (min-width: 64em)': {
        justifyContent: 'space-around'
      }
    },
    betweenMD: {
      '@media only screen and (min-width: 64em)': {
        justifyContent: 'space-between'
      }
    },
    startLG: {
      justifyContent: 'flex-start',
      textAlign: 'start'
    },
    centerLG: {
      justifyContent: 'center',
      textAlign: 'center'
    },
    endLG: {
      justifyContent: 'flex-end',
      textAlign: 'end'
    },
    topLG: {
      alignItems: 'flex-start'
    },
    middleLG: {
      alignItems: 'center'
    },
    bottomLG: {
      alignItems: 'flex-end'
    },
    aroundLG: {
      justifyContent: 'space-around'
    },
    betweenLG: {
      justifyContent: 'space-between'
    }
  })
}
