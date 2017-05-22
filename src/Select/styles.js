import { secondary, secondaryDarker, font, gray, lightGray, white } from '../globals/colors';

import { StyleSheet } from 'react-look';

export default StyleSheet.create({
	caption: {
		appearance: 'none',
		minWidth: 150,
		height: '2.5rem',
		fontSize: '1.15rem',
		color: white,
		backgroundColor: secondary,
		border: `5px solid ${secondary}`,
		borderRadius: 5,
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
		},
		'::ms-expand': {
			display: 'none'
		}
	},
	item: {
		appearance: 'button',
		background: lightGray,
		color: '#555',
		padding: '7px 5px',
		cursor: 'pointer',
		boxSizing: 'border-box',
		transition: 'background-color 0.1s linear',
		':hover': {
			background: `${gray} !important`
		},
		':active': {
			background: gray
		}
	}
});
