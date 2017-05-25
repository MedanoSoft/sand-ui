import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { css } from 'aphrodite/no-important';

import defaultStyles from './styles';

class Slider extends Component {
	constructor() {
		super();
		this.state = {
			active: 0
		}
		this.setSeparators = this.setSeparators.bind(this);
	}

	setSeparators(sep) {
		const { sections } = this.props;
		let arr = [];
		for(let i = 1; i < sections; i++) {
			arr.push(
				(<div key={i} className={css(defaultStyles.separator)} style={{left: `${sep * i}%`}}></div>)
			);
		}
		return arr;
	}

	render() {
		const { sections, type } = this.props;
		const { active } = this.state;

		const sep = 100 / sections;

		return (
			<div className={css(defaultStyles.container)}>
				<div className={css(defaultStyles.circle)} style={{left: `${(sep * active) / 2}%`}}></div>
				<div className={css(defaultStyles.wrapper)}>
					<div className={css(defaultStyles.bar)} style={{width: `${sep * active}%`}}></div>
					{this.setSeparators(sep)}
				</div>
			</div>
		);
	}
}

Slider.propTypes = {
	sections: PropTypes.number
}

Slider.defaultProps = {
	sections: 1
}

export default Slider;