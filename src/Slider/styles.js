import { lightGray, gray, secondary, secondaryDarker } from '../globals/colors';

import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
	wrapper: {
		backgroundColor: lightGray,
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
		backgroundColor: gray,
		position: 'relative',
		display: 'inline-block',
		top: -5
	},
	bar: {
		backgroundColor: secondary,
		margin: 0,
		position: 'absolute',
		height: '100%',
		zIndex: 1,
		transition: 'width 0.5s ease'
	},
	circle: {
		position: 'absolute',
		height: 18,
		width: 18,
		backgroundColor: secondary,
		zIndex: 2,
		marginTop: -3,
		marginLeft: -9,
		borderRadius: '100%',
		transition: 'all 0.5s ease',
		cursor: 'pointer',
		':hover': {
			backgroundColor: secondaryDarker
		},
		':active': {
			backgroundColor: secondaryDarker
		}
	},
	container: {
		display: 'block',
		height: 25
	}
});