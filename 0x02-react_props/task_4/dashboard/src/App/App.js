import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

import './App.css';
import { getLatestNotification } from '../utils/utils';

function App({ isLoggedIn }) {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40},
  ];

  const listNotifications = [
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

  return (
    <React.Fragment>
      <Notifications displaDrawer={false} listNotifications={listNotifications} />
      <div className='App'>
        <Header />
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
