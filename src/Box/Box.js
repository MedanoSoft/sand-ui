import React, { Component } from 'react';

import defaultStyles from './styles';

import look from 'react-look';

class Box extends Component {
  render() {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
}

export default look(Box);
