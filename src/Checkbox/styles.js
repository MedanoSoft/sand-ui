import { gray, font, secondary, white } from '../globals/colors';

import { StyleSheet } from 'aphrodite';

function checkboxGenerator(backgroundColor, otherStyles={}) {
	return Object.assign({}, {
		appearance: 'none',
		outline: 'none',
		width: 20,
		height: 20,
		borderRadius: 5,
		cursor: 'pointer',
		backgroundColor,
		fontSize: 16,
		transition: 'background-color 0.25s linear'
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
	active: checkboxGenerator(secondary, {
		':after': {
			position: 'absolute',
			content: '"✓"',
			color: white,
			marginLeft: 5,
			marginTop: 2,
			fontSize: 12
		}
	}),
	inactive: checkboxGenerator(gray),
	disabled: checkboxGenerator(gray, {
		cursor: 'default'
	}),
	disabledChecked: checkboxGenerator(gray, {
		cursor: 'default',
		':after': {
			position: 'absolute',
			content: '"✓"',
			color: white,
			marginLeft: 5,
			marginTop: 2,
			fontSize: 12
		}
	}),
	text: {
		position: 'relative',
		top: -8
	}
});