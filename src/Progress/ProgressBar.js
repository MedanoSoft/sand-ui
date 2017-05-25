import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { css } from 'aphrodite/no-important';

import defaultStyles from './styles';

class ProgressBar extends Component {

	render() {
		const { percent, type } = this.props;
		return (
			<div className={css(defaultStyles.wrapper)}>
				<div className={css(defaultStyles[type])} style={{width: `${percent}%`}}></div>
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

export default ProgressBar;