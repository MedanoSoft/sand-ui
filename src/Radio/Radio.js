import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { css } from 'aphrodite/no-important';

import defaultStyles from './styles';

class Radio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: this.props.checked
		};

		this.handleRadio = this.handleRadio.bind(this);
		this.setStyles = this.setStyles.bind(this);
	}

	setStyles() {
		if(this.state.checked) {
			if(this.props.disabled)
				return defaultStyles.disabledChecked;
			return defaultStyles.active;
		} else {
			if(this.props.disabled)
				return defaultStyles.disabled;
			return defaultStyles.inactive;
		}
	}

	handleRadio(event) {
		if(this.props.onChange)
			this.props.onChange(event.target.value);
	}

	render() {
		const { name, value, label } = this.props;

		return (
			<label htmlFor={value} className={css(defaultStyles.wrapper)}>
				<input {...this.props} className={css(this.setStyles())} checked={this.state.checked} type="radio" id={value} onChange={this.handleRadio} />
				<span className={css(defaultStyles.text)}>{label}</span>
			</label>
		);
	}
}

Radio.propTypes = {
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	checked: PropTypes.bool,
	onChange: PropTypes.func
};

Radio.defaultProps = {
	name: 'defaultRadio',
	label: '',
	checked: false
}

export default Radio;