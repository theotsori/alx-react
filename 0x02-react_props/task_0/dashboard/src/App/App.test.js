import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });

  /*
  it('should render a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-header')).toHaveLength(1);
  });

  it('should render a div with class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-body')).toHaveLength(1);
  });

  it('should render a div with class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-footer')).toHaveLength(1);
  });
  */
});
