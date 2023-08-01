import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

import './App.css';

class App extends React.Component {
  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40},
  ];

  listNotifications = [
    {
      id: 1,
      html: {
        __html: "<strong>Urgent requirement</strong> - complete by EOD"
      },
      type: "urgent",
      value: "New course available",
    },
    {
      id: 2,
      html: {
        __html: getLatestNotification()
      },
      type: "urgent",
      value: "New resume available",
    },
    {
      id: 3,
      html: {
        __html: "<strong>Urgent requirement</strong> - complete by EOD"
      },
      type: "urgent",
      value: "New course available",
    },
  ];

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    return (
      <React.Fragment>
        <Notifications displayDrawer={false} listNotifications={this.listNotifications} />
        <div className='App'>
          <Header />
          {this.props.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <BodySection title='Test'>
            <p>Test Parent</p>
            <p>Test Child</p>
          </BodySection>
          <BodySectionWithMarginBottom title='Test'>
            <p>Test Parent</p>
            <p>Test Child</p>
          </BodySectionWithMarginBottom>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
