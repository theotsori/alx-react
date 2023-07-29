import React from 'react';
import PropTypes from 'prop-types';
import './Notifications';

function NotificationItem({ type, html, value }) {
  return (
    <>
      {type && value ? <li data-notification-type={type}>{value}</li> : null}
      {html ? <li data-urgent dangerouslySetInnerHTML={{ __html: html.__html }}></li> : null}
    </>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string.isRequired,
};

export default NotificationItem;
