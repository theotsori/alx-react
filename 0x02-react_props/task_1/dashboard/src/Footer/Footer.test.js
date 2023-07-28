import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../../../../task_0/dashboard/src/Footer/Footer';
import { getFullYear, getFooterCopy } from '../../../../task_0/dashboard/src/utils/utils';

describe('Footer test', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('should render the text Copyright', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
  });
});
