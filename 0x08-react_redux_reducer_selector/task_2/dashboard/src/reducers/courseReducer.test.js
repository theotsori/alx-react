// courseReducer.test.js

import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

// Test Suite
describe('courseReducer', () => {
  // Test 1
  it('should return the default state with an empty array', () => {
    const newState = courseReducer(undefined, {});
    expect(newState.get('courses')).toEqual([]);
  });

  // Test 2
  it('should handle FETCH_COURSE_SUCCESS action and set isSelected to false', () => {
    const coursesData = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const newState = courseReducer(undefined, {
      type: FETCH_COURSE_SUCCESS,
      data: coursesData,
    });

    const expectedState = coursesData.map(course => ({
      ...course,
      isSelected: false,
    }));

    expect(newState.get('courses')).toEqual(expectedState);
  });

  // Test 3
  it('should handle SELECT_COURSE action and update isSelected property', () => {
    const currentState = courseReducer(undefined, {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    });

    const newState = courseReducer(currentState, { type: SELECT_COURSE, index: 2 });

    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];

    expect(newState.get('courses')).toEqual(expectedState);
  });

  // Test 4
  it('should handle UNSELECT_COURSE action and update isSelected property', () => {
    const currentState = courseReducer(undefined, {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    });

    const newState = courseReducer(currentState, { type: UNSELECT_COURSE, index: 2 });

    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];

    expect(newState.get('courses')).toEqual(expectedState);
  });
});

