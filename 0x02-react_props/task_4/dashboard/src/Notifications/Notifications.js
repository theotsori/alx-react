import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer }) {
  return (
    <>
      {displayDrawer && (
        <div className='menuItem'>
          Your notifications
        </div>
      )}
      <div className={`Notifications ${displayDrawer ? 'show' : 'hide'}`}>
        <button
          className='btn'
          aria-label='close'
          onClick={() => console.log('Close button has been clicked')}
        >
          <img src={closeIcon} alt='closeIcon' width='10px' />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type='default' value='New course available' />
          <NotificationItem type='urgent' value='New resume available' />
          <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
        </ul>
      </div>
    </>
  );
}

export default Notifications;
