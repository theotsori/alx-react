// courseReducer.js

import { Map } from 'immutable';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

// Initial State as Immutable List
const initialState = Map({
  courses: [],
});

// Reducer Function
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Set isSelected to false for every item in the list
      const coursesWithSelection = action.data.map(course => ({
        ...course,
        isSelected: false,
      }));
      return state.set('courses', coursesWithSelection);

    case SELECT_COURSE:
      // Update the isSelected property for the selected course
      return state.update('courses', courses =>
        courses.map(course =>
          course.id === action.index ? { ...course, isSelected: true } : course
        )
      );

    case UNSELECT_COURSE:
      // Update the isSelected property for the unselected course
      return state.update('courses', courses =>
        courses.map(course =>
          course.id === action.index ? { ...course, isSelected: false } : course
        )
      );

    // Default case
    default:
      return state;
  }
};

export default courseReducer;

