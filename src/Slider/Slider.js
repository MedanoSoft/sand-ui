import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { css } from 'aphrodite/no-important';

import defaultStyles from './styles';

class Slider extends Component {
	constructor() {
		super();
		this.state = {
			percent: 0
		};

		this.handleSlider = this.handleSlider.bind(this);
	}

	componentWillReceiveProps(nextProps, nextState) {
		if(nextState.percent !== this.state.percent) {
			this.setState({
				percent: nextState.percent
			})
		}
	}

	handleSlider(e) {
		const percent = e.target.value;
		this.setState({ percent });
		if(this.props.onChange)
			this.props.onChange(percent);
	}

	render() {
		const { percent } = this.state;
		return (
			<div className={css(defaultStyles.container)}>
				<input {...this.props} type="range" value={percent} className={css(defaultStyles.bar)} onChange={this.handleSlider} />
			</div>
		);
	}
}


Slider.propTypes = {
	step: PropTypes.number
}

Slider.defaultProps = {
	step: 1
}

export default Slider;