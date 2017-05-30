import { gray, font, secondary, white, lightGray } from '../globals/colors';

import { StyleSheet } from 'aphrodite/no-important';

function radioGenerator(backgroundColor, otherStyles={}) {
	return Object.assign({}, {
		appearance: 'none',
		outline: 'none',
		width: 20,
		height: 20,
		borderRadius: '100%',
		border: `3px solid ${backgroundColor}`,
		cursor: 'pointer',
		background: 'none',
		backgroundColor: 'none',
		fontSize: 16,
		transition: 'background-color 0.25s linear',
		':after': {
			opacity: 1,
			position: 'absolute',
			content: '""',
			width: 5,
			height: 5,
			margin: '7px',
			backgroundColor,
			transform: 'translate(-50%, -50%)',
			border: `1px solid ${backgroundColor}`,
			borderRadius: '100%'
		},
		':active': {
			background: 'none'
		},
		':focus': {
			background: 'none',
			outline: 'none'
		}
	}, otherStyles);
}

export default StyleSheet.create({
	wrapper: {
		margin: '7px 15px',
		color: font,
		fontSize: 16,
		minHeight: 30,
		display: 'block'
	},
	active: radioGenerator(secondary),
	inactive: radioGenerator(gray, {
		':after': {
			opacity: 0
		},
		':hover': {
			border: `3px solid ${gray}`,
			':after': {
				opacity: 1,
				position: 'absolute',
				content: '""',
				width: 5,
				height: 5,
				margin: '7px',
				backgroundColor: gray,
				transform: 'translate(-50%, -50%)',
				border: `1px solid ${gray}`,
				borderRadius: '100%'
			}
		}
	}),
	disabled: radioGenerator(gray, {
		cursor: 'default',
		backgroundColor: lightGray,
		':after': {
			opacity: 0
		}
	}),
	disabledChecked: radioGenerator(gray, {
		cursor: 'default',
	}),
	text: {
		position: 'relative',
		top: -8
	}
});