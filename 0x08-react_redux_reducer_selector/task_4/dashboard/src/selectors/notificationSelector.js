// src/selectors/notificationSelector.js

export const filterTypeSelected = state => state.getIn(['notifications', 'filter']);
export const getNotifications = state => state.getIn(['notifications', 'entities', 'notifications']);
export const getUnreadNotifications = state =>
  getNotifications(state).filter(notification => !notification.get('isRead'));

