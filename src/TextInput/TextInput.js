import React, { Component } from 'react';

import PropTypes from 'prop-types';

import look from 'react-look';

import defaultStyles from './styles';

class TextInput extends Component {

  render() {
    const { className, disabled } = this.props;
    return (
      <input {...this.props} className={defaultStyles[className]} disabled={ className === 'disabled' ? true : disabled} />
    );
  }

}

TextInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.disabled
};

TextInput.defaultProps = {
  type: 'text',
  className: 'active'
};

export default look(TextInput);