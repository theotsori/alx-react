import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe("Header", () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should have tags and labels', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
    expect(wrapper.find('input')).toHaveLength(2);
  });
});
