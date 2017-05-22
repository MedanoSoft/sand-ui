import { secondary, secondaryDarker, gray, lightGray, white } from '../globals/colors';

import { StyleSheet } from 'react-look';

export default StyleSheet.create({
	caption: {
		minWidth: 150,
		height: '2.5rem',
		fontSize: '1.15rem',
		color: white,
		backgroundColor: secondary,
		border: `5px solid ${secondary}`,
		borderRadius: 5,
		margin: '7px 15px',
		boxSizing: 'border-box',
		transition: 'opacity 0.25s linear',
		':hover': {
			opacity: 0.8
		},
		':active': {
			backgroundColor: secondaryDarker,
			border: `5px solid ${secondaryDarker}`
		},
		':focus': {
			outline: 'none'
		}
	},
	listVisible: {
		visibility: 'visible',
		backgroundColor: lightGray,
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
			backgroundColor: gray
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
});