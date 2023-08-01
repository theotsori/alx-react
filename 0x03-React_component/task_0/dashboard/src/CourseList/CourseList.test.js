import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    const component = shallow(<CourseList listCourses={[]} />);
    expect(component.exists()).toBe(true);
    render(<CourseList />);
  });

  it('renders the 5 different rows', () => {
    const { container } = render(<CourseList />);
    const thElements = container.querySelectorAll('th');
    const tdElements = container.querySelectorAll('td');
    expect(thElements.length).toBe(2);
    expect(tdElements.length).toBe(6);
  });

  it('render the correct number of CourseListRow componenets', () => {
    const listCourses = [
      { id: 1, name: 'Course 1', credit: 60 },
      { id: 2, name: 'Course 2', credit: 20 },
      { id: 3, name: 'Course 3', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(listCourses.length);
  });
});
