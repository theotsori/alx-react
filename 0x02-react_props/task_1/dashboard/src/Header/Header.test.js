import React from 'react';
import Header from '../../../../task_0/dashboard/src/Header/Header';
import { shallow } from 'enzyme';

describe("Header", () => {
  it('render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render "h1" element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.containsMatchingElements(<h1>School dashboard</h1>)).toEqual(true);
  });
});
