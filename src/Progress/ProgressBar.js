import React, { Component } from 'react';

import PropTypes from 'prop-types';

import look from 'react-look';

import defaultStyles from './styles';

class ProgressBar extends Component {

	render() {
		const { percent, type } = this.props;
		return (
			<div className={defaultStyles.wrapper}>
				<div className={defaultStyles[type]} style={{width: `${percent}%`}}></div>
			</div>
		);
	}

}

ProgressBar.propTypes = {
	percent: PropTypes.number,
	type: PropTypes.string
};

ProgressBar.defaultProps = {
	percent: 25,
	type: 'default'
};

export default look(ProgressBar);