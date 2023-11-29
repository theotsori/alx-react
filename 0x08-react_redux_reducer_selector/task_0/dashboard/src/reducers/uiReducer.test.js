// reducers/uiReducer.test.js

import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

// Test Suite
describe('uiReducer', () => {
  // Test 1
  it('should return the initial state when no action is passed', () => {
    const newState = uiReducer(undefined, {});
    expect(newState).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  // Test 2
  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const newState = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(newState).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  // Test 3
  it('should correctly update isNotificationDrawerVisible when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const currentState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const newState = uiReducer(currentState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(newState.isNotificationDrawerVisible).toEqual(true);
    expect(newState.isUserLoggedIn).toEqual(false);
    expect(newState.user).toEqual({});
  });
});

