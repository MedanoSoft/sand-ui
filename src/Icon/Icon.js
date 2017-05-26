import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { css } from 'aphrodite/no-important';

import icons from './icons';

import defaultStyles from './styles';

import {
	primary,
	secondary,
	gray,
	green,
	lightGray,
	yellow,
	red
} from '../globals/colors';

class Icon extends Component {
	constructor(props) {
		super(props);

		this.getSVG = this.getSVG.bind(this);
		this.setColor = this.setColor.bind(this);
	}

	getSVG(name) {
		const svg = icons[name];
		return svg;
	}

	setColor() {
		const { color } = this.props;
		switch(color) {
			case 'active':
				return secondary;
			case 'inactive':
				return gray;
			case 'success':
				return green;
			case 'disabled':
				return lightGray;
			case 'inverse':
				return primary;
			case 'warning':
				return yellow;
			case 'danger':
				return red;
			default:
				return color;
		}
	}

	render() {
		const { appearance, name } = this.props;
		const svg = this.getSVG(name);
		const color = this.setColor();
		return (
			<svg className={css(defaultStyles[appearance])} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-labelledby="title">
				<title>{name}</title>
				{svg.map((path, i) => (<path key={i} fill={color} d={path} />))}
		  </svg>
		);
	}
}

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	appearance: PropTypes.string,
	color: PropTypes.string
}

Icon.defaultProps = {
	appearance: 'default',
	color: 'active'
}


export default Icon;