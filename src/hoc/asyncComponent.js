import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
  // return class extends Component {
  return class asyncComponent extends Component {
    // displayName: 'asyncComponent' // to fix ESlint syntax error
    state = {
      component: null
    }

    componentDidMount () {
      importComponent()
        .then(cmp => this.setState({ component: cmp.default }));
    }

    render () {
      const C = this.state.component;
      return C ? <C { ...this.props } /> : null;
    }
  };
};

export default asyncComponent;
