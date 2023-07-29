import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    render(<CourseList />);
  });

  it('renders the 5 different rows', () => {
    const { container } = render(<CourseList />);
    const thElements = container.querySelectorAll('th');
    const tdElements = container.querySelectorAll('td');
    expect(thElements.length).toBe(2);
    expect(tdElements.length).toBe(6);
  });
});
