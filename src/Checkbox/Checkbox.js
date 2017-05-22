import React, { Component } from 'react';

import PropTypes from 'prop-types';

import look from 'react-look';

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
			<label htmlFor={name} className={defaultStyles.wrapper}>
				<input {...this.props} className={this.setStyles()} checked={this.state.checked} id={name} type="checkbox" onChange={this.handleCheckbox} />
				<span className={defaultStyles.text}>{name}</span>
			</label>
		);
	}
}

Checkbox.propTypes = {
	name: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	onChange: PropTypes.function
};

Checkbox.defaultProps = {
	value: 'on',
	checked: false
}

export default look(Checkbox);
