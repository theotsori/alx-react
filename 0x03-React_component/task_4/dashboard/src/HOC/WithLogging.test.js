import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import { afterEach, before, describe } from 'node:test';

describe('WithLogging tests', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it('should log mount and unmount messages for pure HTML element', () => {
    const WrappedComponent = WithLogging(() => <p />);
    const component = mount(<WrappedComponent />);
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Component is mounted on componentDidMount()');
    component.unmount();
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Component is going to unmount on componentWillUnmount()');
  });

  it('should log mount and unmount messages for login component', () => {
    const Login = () => <div>Login component content</div>;
    const WrappedComponent = WithLogging(Login);
    const component = mount(<WrappedComponent />);
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is mounted on componentDidMount()');
    component.unmount();
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is going to unmount on componentWillUnmount()');
  });
});
