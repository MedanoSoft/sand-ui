import React, { Component } from 'react';

import PropTypes from 'prop-types';

import look from 'react-look';

import defaultStyles from './styles';

class TextInput extends Component {

  render() {
    const { type } = this.props;
    return (
      <input {...this.props} type='text' className={defaultStyles[type]} disabled={ type === 'disabled' ? true : undefined} />
    );
  }

}

TextInput.propTypes = {
  type: PropTypes.string
};

TextInput.defaultProps = {
  type: 'active'
};

export default look(TextInput);