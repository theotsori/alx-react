import React from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLoggingComponent extends React.Component {
    componentDidMount() {
      const componentName = WrappedComponent.displayName || 'Component';
      console.log(`Component ${componentName} is mounted on componentDidMount()`);
    }

    componentWillUnmount() {
      const componentName = WrappedComponent.displayName || 'Component';
      console.log(`Component ${componentName} is going to unmount on componentWillUnmount()`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLoggingComponent.displayName = `WithLogging(${WrappedComponent.displayName || 'Component'})`;

  return WithLoggingComponent;
}

export default WithLogging;
