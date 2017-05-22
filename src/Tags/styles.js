import { white, secondary, secondaryDarker, font } from '../globals/colors';

import { StyleSheet } from 'react-look';

export default StyleSheet.create({
	wrapper: {
		height: 'auto',
		backgroundColor: white,
		border: `2px solid ${secondary}`,
		borderRadius: 6,
		padding: 3,
		boxSizing: 'border-box',
		margin: '7px 15px'
	},
	label: {
		display: 'inline-block',
		padding: '2px 15px',
		fontSize: 14,
		margin: 3,
		boxSizing: 'border-box',
		border: `2px solid ${secondary}`,
		borderRadius: 5,
		backgroundColor: secondary,
		color: white,
		cursor: 'pointer',
		transition: 'background-color 0.25s linear, \
		border 0.25s linear, \
		padding-left 0.15s linear, padding-right 0.15s linear',
		':hover': {
			paddingLeft: 2,
			paddingRight: 28,
			backgroundColor: secondaryDarker,
			border: `2px solid ${secondaryDarker}`,
			':after': {
				opacity: 1
			}
		},
		':after': {
			content: '"x"',
			position: 'absolute',
			marginLeft: 15,
			opacity: 0,
			transition: 'opacity 0.15s linear'
		}
	},
	form: {
		padding: 0,
		margin: 0,
		display: 'inline',
		height: 'auto',
		width: '100%'
	},
	input: {
		fontSize: 14,
		color: font,
		width: 'auto',
		border: 'none',
		background: 'none',
		':focus': {
			outline: 'none'
		}
	}
});