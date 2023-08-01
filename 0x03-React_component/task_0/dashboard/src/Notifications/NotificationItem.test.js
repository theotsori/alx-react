import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('render components', () => {
  it('render notificationItem without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html output', () => {
    const wrapper = shallow(<NotificationItem />);
    wrapper.setProps({ type: 'default', value: 'test' });
    expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
  });

  it('render correct html', () => {
    const wrapper = shallow(<NotificationItem />);
    wrapper.setProps({ html: '<u>test</u>'});
    expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});
