import { gray, font, secondary, white } from '../globals/colors';

import { StyleSheet } from 'aphrodite/no-important';

function radioGenerator(backgroundColor, otherStyles={}) {
	return Object.assign({}, {
		appearance: 'none',
		outline: 'none',
		width: 20,
		height: 20,
		borderRadius: '100%',
		border: `5px solid ${backgroundColor}`,
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
	active: radioGenerator(secondary, {
		':after': {
			position: 'absolute',
			content: '""'
		}
	}),
	inactive: radioGenerator(gray),
	disabled: radioGenerator(gray, {
		cursor: 'default'
	}),
	disabledChecked: radioGenerator(gray, {
		cursor: 'default',
		':after': {
			position: 'absolute',
			content: '""'
		}
	}),
	text: {
		position: 'relative',
		top: -8
	}
});