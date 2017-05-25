import React, { Component } from 'react';

import defaultStyles from './styles';

class Box extends Component {
  render() {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
}

export default Box;
