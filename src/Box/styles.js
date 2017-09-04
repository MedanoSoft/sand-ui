import { font, white } from '../globals/colors'

import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  col: {
    boxSizing: 'border-box',
    flex: '0 0 auto',
    paddingRight: '0.5rem',
    paddingLeft: '0.5rem'
  },
  colXS0: colXSGenerator({
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: '100%'
  }),
  colXS1: colXSGenerator({
    flexBasis: '8.33333333%',
    maxWidth: '8.33333333%'
  }),
  colXS2: colXSGenerator({
    flexBasis: '16.66666667%',
    maxWidth: '16.66666667%'
  }),
  colXS3: colXSGenerator({
    flexBasis: '25%',
    maxWidth: '25%'
  }),
  colXS4: colXSGenerator({
    flexBasis: '33.33333333%',
    maxWidth: '33.33333333%'
  }),
  colXS5: colXSGenerator({
    flexBasis: '41.66666667%',
    maxWidth: '41.66666667%'
  }),
  colXS6: colXSGenerator({
    flexBasis: '50%',
    maxWidth: '50%'
  }),
  colXS7: colXSGenerator({
    flexBasis: '58.33333333%',
    maxWidth: '58.33333333%'
  }),
  colXS8: colXSGenerator({
    flexBasis: '66.66666667%',
    maxWidth: '66.66666667%'
  }),
  colXS9: colXSGenerator({
    flexBasis: '75%',
    maxWidth: '75%'
  }),
  colXS10: colXSGenerator({
    flexBasis: '83.33333333%',
    maxWidth: '83.33333333%'
  }),
  colXS11: colXSGenerator({
    flexBasis: '91.66666667%',
    maxWidth: '91.66666667%'
  }),
  colXS12: colXSGenerator({
    flexBasis: '100%',
    maxWidth: '100%'
  }),
  colXSoffset0: colXSGenerator({
    marginLeft: 0
  }),
  colXSoffset1: colXSGenerator({
    marginLeft: '8.33333333%'
  }),
  colXSoffset2: colXSGenerator({
    marginLeft: '16.66666667%'
  }),
  colXSoffset3: colXSGenerator({
    marginLeft: '25%'
  }),
  colXSoffset4: colXSGenerator({
    marginLeft: '33.33333333%'
  }),
  colXSoffset5: colXSGenerator({
    marginLeft: '41.66666667%'
  }),
  colXSoffset6: colXSGenerator({
    marginLeft: '50%'
  }),
  colXSoffset7: colXSGenerator({
    marginLeft: '58.33333333%'
  }),
  colXSoffset8: colXSGenerator({
    marginLeft: '66.66666667%'
  }),
  colXSoffset9: colXSGenerator({
    marginLeft: '75%'
  }),
  colXSoffset10: colXSGenerator({
    marginLeft: '83.33333333%'
  }),
  colXSoffset11: colXSGenerator({
    marginLeft: '91.66666667%'
  }),
  colXSoffset12: colXSGenerator({
    marginLeft: '100%'
  }),

  firstXS: {
    order: -1
  },
  lastXS: {
    order: 1
  },
  colSM0: colSMGenerator({
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: '100%'
  }),
  colSM1: colSMGenerator({
    flexBasis: '8.33333333%',
    maxWidth: '8.33333333%'
  }),
  colSM2: colSMGenerator({
    flexBasis: '16.66666667%',
    maxWidth: '16.66666667%'
  }),
  colSM3: colSMGenerator({
    flexBasis: '25%',
    maxWidth: '25%'
  }),
  colSM4: colSMGenerator({
    flexBasis: '33.33333333%',
    maxWidth: '33.33333333%'
  }),
  colSM5: colSMGenerator({
    flexBasis: '41.66666667%',
    maxWidth: '41.66666667%'
  }),
  colSM6: colSMGenerator({
    flexBasis: '50%',
    maxWidth: '50%'
  }),
  colSM7: colSMGenerator({
    flexBasis: '58.33333333%',
    maxWidth: '58.33333333%'
  }),
  colSM8: colSMGenerator({
    flexBasis: '66.66666667%',
    maxWidth: '66.66666667%'
  }),
  colSM9: colSMGenerator({
    flexBasis: '75%',
    maxWidth: '75%'
  }),
  colSM10: colSMGenerator({
    flexBasis: '83.33333333%',
    maxWidth: '83.33333333%'
  }),
  colSM11: colSMGenerator({
    flexBasis: '91.66666667%',
    maxWidth: '91.66666667%'
  }),
  colSM12: colSMGenerator({
    flexBasis: '100%',
    maxWidth: '100%'
  }),
  colSMoffset0: colSMGenerator({
    marginLeft: 0
  }),
  colSMoffset1: colSMGenerator({
    marginLeft: '8.33333333%'
  }),
  colSMoffset2: colSMGenerator({
    marginLeft: '16.66666667%'
  }),
  colSMoffset3: colSMGenerator({
    marginLeft: '25%'
  }),
  colSMoffset4: colSMGenerator({
    marginLeft: '33.33333333%'
  }),
  colSMoffset5: colSMGenerator({
    marginLeft: '41.66666667%'
  }),
  colSMoffset6: colSMGenerator({
    marginLeft: '50%'
  }),
  colSMoffset7: colSMGenerator({
    marginLeft: '58.33333333%'
  }),
  colSMoffset8: colSMGenerator({
    marginLeft: '66.66666667%'
  }),
  colSMoffset9: colSMGenerator({
    marginLeft: '75%'
  }),
  colSMoffset10: colSMGenerator({
    marginLeft: '83.33333333%'
  }),
  colSMoffset11: colSMGenerator({
    marginLeft: '91.66666667%'
  }),
  colSMoffset12: colSMGenerator({
    marginLeft: '100%'
  }),

  firstSM: {
    '@media only screen and (min-width: 48em)': {
      order: -1
    }
  },
  lastSM: {
    '@media only screen and (min-width: 48em)': {
      order: 1
    }
  },
  colMD0: colMDGenerator({
    flexGrow: 1,
    flexbasis: 0,
    maxWidth: '100%'
  }),
  colMD1: colMDGenerator({
    flexBasis: '8.33333333%',
    maxWidth: '8.33333333%'
  }),
  colMD2: colMDGenerator({
    flexBasis: '16.66666667%',
    maxWidth: '16.66666667%'
  }),
  colMD3: colMDGenerator({
    flexBasis: '25%',
    maxWidth: '25%'
  }),
  colMD4: colMDGenerator({
    flexBasis: '33.33333333%',
    maxWidth: '33.33333333%'
  }),
  colMD5: colMDGenerator({
    flexBasis: '41.66666667%',
    maxWidth: '41.66666667%'
  }),
  colMD6: colMDGenerator({
    flexBasis: '50%',
    maxWidth: '50%'
  }),
  colMD7: colMDGenerator({
    flexBasis: '58.33333333%',
    maxWidth: '58.33333333%'
  }),
  colMD8: colMDGenerator({
    flexBasis: '66.66666667%',
    maxWidth: '66.66666667%'
  }),
  colMD9: colMDGenerator({
    flexBasis: '75%',
    maxWidth: '75%'
  }),
  colMD10: colMDGenerator({
    flexBasis: '83.33333333%',
    maxWidth: '83.33333333%'
  }),
  colMD11: colMDGenerator({
    flexBasis: '91.66666667%',
    maxWidth: '91.66666667%'
  }),
  colMD12: colMDGenerator({
    flexBasis: '100%',
    maxWidth: '100%'
  }),
  colMDoffset0: colMDGenerator({
    marginLeft: 0
  }),
  colMDoffset1: colMDGenerator({
    marginLeft: '8.33333333%'
  }),
  colMDoffset2: colMDGenerator({
    marginLeft: '16.66666667%'
  }),
  colMDoffset3: colMDGenerator({
    marginLeft: '25%'
  }),
  colMDoffset4: colMDGenerator({
    marginLeft: '33.33333333%'
  }),
  colMDoffset5: colMDGenerator({
    marginLeft: '41.66666667%'
  }),
  colMDoffset6: colMDGenerator({
    marginLeft: '50%'
  }),
  colMDoffset7: colMDGenerator({
    marginLeft: '58.33333333%'
  }),
  colMDoffset8: colMDGenerator({
    marginLeft: '66.66666667%'
  }),
  colMDoffset9: colMDGenerator({
    marginLeft: '75%'
  }),
  colMDoffset10: colMDGenerator({
    marginLeft: '83.33333333%'
  }),
  colMDoffset11: colMDGenerator({
    marginLeft: '91.66666667%'
  }),

  firstMD: {
    order: -1
  },
  lastMD: {
    order: 1
  },

  colLG0: colLGGenerator({
    flexGrow: 1,
    flexbasis: 0,
    maxWidth: '100%'
  }),
  colLG1: colLGGenerator({
    flexBasis: '8.33333333%',
    maxWidth: '8.33333333%'
  }),
  colLG2: colLGGenerator({
    flexBasis: '16.66666667%',
    maxWidth: '16.66666667%'
  }),
  colLG3: colLGGenerator({
    flexBasis: '25%',
    maxWidth: '25%'
  }),
  colLG4: colLGGenerator({
    flexBasis: '33.33333333%',
    maxWidth: '33.33333333%'
  }),
  colLG5: colLGGenerator({
    flexBasis: '41.66666667%',
    maxWidth: '41.66666667%'
  }),
  colLG6: colLGGenerator({
    flexBasis: '50%',
    maxWidth: '50%'
  }),
  colLG7: colLGGenerator({
    flexBasis: '58.33333333%',
    maxWidth: '58.33333333%'
  }),
  colLG8: colLGGenerator({
    flexBasis: '66.66666667%',
    maxWidth: '66.66666667%'
  }),
  colLG9: colLGGenerator({
    flexBasis: '75%',
    maxWidth: '75%'
  }),
  colLG10: colLGGenerator({
    flexBasis: '83.33333333%',
    maxWidth: '83.33333333%'
  }),
  colLG11: colLGGenerator({
    flexBasis: '91.66666667%',
    maxWidth: '91.66666667%'
  }),
  colLG12: colLGGenerator({
    flexBasis: '100%',
    maxWidth: '100%'
  }),
  colLGoffset0: colLGGenerator({
    marginLeft: 0
  }),
  colLGoffset1: colLGGenerator({
    marginLeft: '8.33333333%'
  }),
  colLGoffset2: colLGGenerator({
    marginLeft: '16.66666667%'
  }),
  colLGoffset3: colLGGenerator({
    marginLeft: '25%'
  }),
  colLGoffset4: colLGGenerator({
    marginLeft: '33.33333333%'
  }),
  colLGoffset5: colLGGenerator({
    marginLeft: '41.66666667%'
  }),
  colLGoffset6: colLGGenerator({
    marginLeft: '50%'
  }),
  colLGoffset7: colLGGenerator({
    marginLeft: '58.33333333%'
  }),
  colLGoffset8: colLGGenerator({
    marginLeft: '66.66666667%'
  }),
  colLGoffset9: colLGGenerator({
    marginLeft: '75%'
  }),
  colLGoffset10: colLGGenerator({
    marginLeft: '83.33333333%'
  }),
  colLGoffset11: colLGGenerator({
    marginLeft: '91.66666667%'
  }),

  firstLG: {
    order: -1
  },
  lastLG: {
    order: 1
  }
})

function colXSGenerator (otherStyles = {}) {
  return Object.assign({}, {
    boxSizing: 'border-box',
    flex: '0 0 auto',
    paddingRight: '0.5rem',
    paddingLeft: '0.5rem'
  }, otherStyles)
}

function colSMGenerator (otherStyles = {}) {
  return {
    '@media only screen and (min-width: 48em)': {
      boxSizing: 'border-box',
      flex: '0 0 auto',
      paddingRight: '0.5rem',
      paddingLeft: '0.5rem',
      ...otherStyles
    }
  }
}

function colMDGenerator (otherStyles = {}) {
  return {
    '@media only screen and (min-width: 64em)': {
      boxSizing: 'border-box',
      flex: '0 0 auto',
      paddingRight: '0.5rem',
      paddingLeft: '0.5rem',
      ...otherStyles
    }
  }
}

function colLGGenerator (otherStyles = {}) {
  return {
    boxSizing: 'border-box',
    flex: '0 0 auto',
    paddingRight: '0.5rem',
    paddingLeft: '0.5rem',
    ...otherStyles
  }
}
