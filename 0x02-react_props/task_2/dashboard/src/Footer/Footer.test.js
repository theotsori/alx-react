import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';
import { getFullYear, getFooterCopy } from '../utils/utils';

describe('Testing footer', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render text', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
  });
});
