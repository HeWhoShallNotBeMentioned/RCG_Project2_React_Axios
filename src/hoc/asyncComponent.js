import React, { Component } from 'react';

const asyncComponent = importComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { component: null };
    }

    async componentDidMount() {
      const awaitedImport = await importComponent();
      this.setState({ component: awaitedImport.default });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};
export default asyncComponent;
