import React, { Component } from 'react';

import PropTypes from 'prop-types';

import look from 'react-look';

import defaultStyles from './styles';

import Icon from '../Icon';

class TextInput extends Component {

  render() {
    const { className, disabled } = this.props;
    return (
      <div className={defaultStyles.wrapper}>
        {this.props.icon && <Icon name={this.props.icon} appearance="input" color={className} />}
        <input {...this.props} className={defaultStyles[className]} disabled={ className === 'disabled' ? true : disabled} />
      </div>
    );
  }

}

TextInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.disabled,
  icon: PropTypes.string
};

TextInput.defaultProps = {
  type: 'text',
  className: 'active'
};

export default look(TextInput);