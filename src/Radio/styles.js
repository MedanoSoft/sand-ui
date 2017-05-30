import { gray, font, secondary, white } from '../globals/colors';

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
		fontSize: 16,
		transition: 'background-color 0.25s linear',
		':after': {
			opacity: 0,
			position: 'absolute',
			content: '""',
			width: 5,
			height: 5,
			margin: '6px',
			backgroundColor,
			border: `1px solid ${backgroundColor}`,
			borderRadius: '100%'
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
		':hover': {
			backgroundColor: secondary,
			':after': {
				opacity: 1
			}
		}
	}),
	inactive: radioGenerator(gray),
	disabled: radioGenerator(gray, {
		cursor: 'default'
	}),
	disabledChecked: radioGenerator(gray, {
		cursor: 'default',
	}),
	text: {
		position: 'relative',
		top: -8
	}
});