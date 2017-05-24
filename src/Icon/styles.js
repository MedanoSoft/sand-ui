import { StyleSheet } from 'react-look';

import * as colors from '../globals/colors';


export default StyleSheet.create({
	default: {},
	input: {
		left: 8,
		top: 8
	},
	active: { color: colors.secondary },
	inactive: { color: colors.gray },
	success: { color: colors.green },
	disabled: { color: colors.lightGray },
	inverse: { color: colors.primary },
	warning: { color: colors.yellow },
	danger: { color: colors.red }
});