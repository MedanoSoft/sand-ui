import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { css } from 'aphrodite';

import icons from './icons';

import defaultStyles from './styles';

class Icon extends Component {
	constructor(props) {
		super(props);

		this.getSVG = this.getSVG.bind(this);
	}

	getSVG(name) {
		const svg = icons[name];
		return svg;
	}

	render() {
		const { appearance, color, name } = this.props;
		const svg = this.getSVG(name);

		return (
			<svg className={css(defaultStyles[appearance])} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" aria-labelledby="title">
				<title>{name}</title>
		    <path horizAdvX={svg.properties['horiz-adv-x']} d={svg.source}></path>
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