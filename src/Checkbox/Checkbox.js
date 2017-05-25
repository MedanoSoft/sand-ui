import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { css } from 'aphrodite/no-important';

import defaultStyles from './styles';

class Checkbox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: this.props.checked
		};

		this.handleCheckbox = this.handleCheckbox.bind(this);
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

	handleCheckbox(event) {
		this.setState({
			checked: !!event.target.checked
		});
		if(this.props.onChange)
			this.props.onChange(this.state.checked);
	}

	render() {
		const { name } = this.props;

		return (
			<label htmlFor={name} className={css(defaultStyles.wrapper)}>
				<input {...this.props} className={css(this.setStyles())} checked={this.state.checked} id={name} type="checkbox" onChange={this.handleCheckbox} />
				<span className={css(defaultStyles.text)}>{name}</span>
			</label>
		);
	}
}

Checkbox.propTypes = {
	name: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	onChange: PropTypes.func
};

Checkbox.defaultProps = {
	value: 'on',
	checked: false
}

export default Checkbox;
