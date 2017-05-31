import { lightGray, gray, secondary } from '../globals/colors';

import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
	wrapper: {
		backgroundColor: lightGray.default,
		width: '100%',
		height: 12,
		borderRadius: 32,
		padding: 0,
		overflow: 'hidden',
		position: 'absolute'
	},
	separator: {
		width: 6,
		height: 6,
		borderRadius: '100%',
		backgroundColor: gray.default,
		position: 'relative',
		display: 'inline-block',
		top: -5,
		zIndex: 2,
		marginLeft: -2
	},
	bar: {
		appearance: 'none',
		borderRadius: 32,
		backgroundColor: lightGray.default,
		margin: 0,
		position: 'absolute',
		height: 12,
		width: '100%',
		transition: 'width 0.5s ease',
		':focus': {
			outline: 'none'
		},
		'::-webkit-slider-thumb': {
			appearance: 'none',
			zIndex: 30,
			height: 18,
			width: 18,
			backgroundColor: secondary.default,
			borderRadius: '100%',
			transition: 'all 0.5s ease',
			cursor: 'pointer',
			':hover': {
				backgroundColor: secondary.darker
			},
			':active': {
				backgroundColor: secondary.darker
			}
		}
	},
	container: {
		display: 'block',
		height: 25,
		width: '100%'
	}
});