import React from 'react';
import App from '../../../../task_0/dashboard/src/App/App';
import Login from '../../../../task_0/dashboard/src/Login/Login';
import Header from '../../../../task_0/dashboard/src/Header/Header';
import Footer from '../../../../task_0/dashboard/src/Footer/Footer';
import Notifications from '../../../../task_0/dashboard/src/Notifications/Notifications';
import { shallow } from 'enzyme';

describe('App tests', () => {
  it('renders without crashing', () => {
    const ted = shallow(<App />);
    expect(ted).toBeDefined();
  });

  it('render Notifications', () => {
    const ted = shallow(<App />);
    expect(ted.contains(<Notifications />)).toBe(true);
  });

  it('render Notifications', () => {
    const ted = shallow(<App />);
    expect(ted.contains(<Header />)).toBe(true);
  });

  it('render Notifications', () => {
    const ted = shallow(<App />);
    expect(ted.contains(<Login />)).toBe(true);
  });

  it('render Notifications', () => {
    const ted = shallow(<App />);
    expect(ted.contains(<Footer />)).toBe(true);
  });
});
