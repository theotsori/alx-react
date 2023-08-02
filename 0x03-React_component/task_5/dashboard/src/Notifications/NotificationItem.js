import React from 'react';
import PropTypes from 'prop-types';
import './Notifications';

class NotificationItem extends React.Component {
  render () {
    const { type, html, value, markAsRead } = this.props;

    return (
      <>
        {type && value ? (
          <li data-notification-type={type} onClick={() => markAsRead(this.props.id)}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li data-urgent dangerouslySetInnerHTML={{ __html: html.__html }} onClick={() => markAsRead(this.props.id)}></li>
        ) : null}
      </>
    );
  }
}

NotificationItem.propType = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value:PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  id: NaN,
};

export default NotificationItem;
