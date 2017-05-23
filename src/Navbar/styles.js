import { primary, primaryDarker, secondary, gray, white } from '../globals/colors';

import { StyleSheet } from 'react-look';

export default StyleSheet.create({
	bar: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '10px 6px',
		backgroundColor: primary,
		color: white,
		border: `6px solid ${primary}`,
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
		alignSelf: 'right'
	},
	searchInput: {
		minWidth: 150,
		fontSize: 15,
		backgroundColor: primaryDarker,
		borderColor: primaryDarker,
		borderWidth: 2,
		borderStyle: 'solid',
		borderRadius: 5,
		boxSizing: 'border-box',
		padding: '5px 10px',
		color: gray,
		transition: 'all 0.25s linear',
		'::-webkit-input-placeholder': {
      color: gray
    },
    ':-moz-placeholder': {
      color: gray
    },
    '::-moz-placeholder': {
      color: gray
    },
    ':-ms-input-placeholder': {
      color: gray
    },
		':focus': {
			outline: 'none',
			borderColor: secondary,
			color: secondary,
			'::-webkit-input-placeholder': {
      	color: secondary
	    },
	    ':-moz-placeholder': {
	      color: secondary
	    },
	    '::-moz-placeholder': {
	      color: secondary
	    },
	    ':-ms-input-placeholder': {
	      color: secondary
	    }
		}
	}

});