import React, { Component } from 'react';

import { LookRoot, Presets } from 'react-look';

class UIProvider extends Component {
  render() {
    return (
      <LookRoot config={Presets['react-dom']}>
        {this.props.children}
      </LookRoot>
    )
  }
}


export default UIProvider;