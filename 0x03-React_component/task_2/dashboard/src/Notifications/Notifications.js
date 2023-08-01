import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

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
            {listNotifications.length > 0 ? (
              listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                />
              ))
            ) : (
              <NotificationItem type='default' value='No new notification for now'/>
            )}
          </ul>
        </div>
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  listNotifications: PropTypes.arrayOf(NotificationItemShape).isRequired,
};

export default Notifications;
