import React, { Component } from 'react';

import PropTypes from 'prop-types';

import look from 'react-look';

import icons from './icons';

import defaultStyles from './styles';

class Icon extends Component {
	constructor(props) {
		super(props);

		this.getPath = this.getPath.bind(this);
	}

	getPath(name) {
		const path = icons[name];
		console.log(path);
		return path;
	}

	render() {
		const { appearance, color, name } = this.props;
		
		return (
			<svg className={defaultStyles[appearance]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" aria-labelledby="title">
				<title>{name}</title>
		    <path d={this.getPath(name)}></path>
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


export default look(Icon);