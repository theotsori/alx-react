// src/selectors/notificationSelector.test.js

import { Map, fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

// Test Suite
describe('Notification Selectors', () => {
  // Test 1
  it('should return the correct filterTypeSelected', () => {
    const state = Map({
      notifications: Map({
        filter: 'DEFAULT',
      }),
    });

    const result = filterTypeSelected(state);
    expect(result).toEqual('DEFAULT');
  });

  // Test 2
  it('should return the correct list of notifications', () => {
    const state = Map({
      notifications: fromJS({
        entities: {
          notifications: {
            1: { id: 1, isRead: false, value: 'New course available' },
            2: { id: 2, isRead: true, value: 'New resume available' },
            3: { id: 3, isRead: false, value: 'New data available' },
          },
        },
      }),
    });

    const result = getNotifications(state);
    const expected = fromJS({
      1: { id: 1, isRead: false, value: 'New course available' },
      2: { id: 2, isRead: true, value: 'New resume available' },
      3: { id: 3, isRead: false, value: 'New data available' },
    });

    expect(result).toEqual(expected);
  });

  // Test 3
  it('should return the correct list of unread notifications', () => {
    const state = Map({
      notifications: fromJS({
        entities: {
          notifications: {
            1: { id: 1, isRead: false, value: 'New course available' },
            2: { id: 2, isRead: true, value: 'New resume available' },
            3: { id: 3, isRead: false, value: 'New data available' },
          },
        },
      }),
    });

    const result = getUnreadNotifications(state);
    const expected = fromJS({
      1: { id: 1, isRead: false, value: 'New course available' },
      3: { id: 3, isRead: false, value: 'New data available' },
    });

    expect(result).toEqual(expected);
  });
});

