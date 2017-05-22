import React, { Component } from 'react';

import PropTypes from 'prop-types';

import defaultStyles from './styles';

import look from 'react-look';

class Select extends Component {
	constructor() {
		super();

		this.setOptions = this.setOptions.bind(this);
	}

	setOptions() {
		return this.props.options.map((node, i) => (
			<option key={i} className={defaultStyles.item} value={(typeof node === typeof {}) ? node.value : node}>{node.name || node}</option>
		));
	}

  render() {
  	const { name } = this.props;
  	const passedProps = {
      ...this.props
    };
    delete(passedProps.options);

    return (
    	<select {...passedProps} name={name} className={defaultStyles.caption}>
    		{this.setOptions()}
    	</select>
    );
  }
}

Select.propTypes = {
	options: PropTypes.array,
	name: PropTypes.string
}

Select.defaultProps = {
	options: []
}

export default look(Select);
