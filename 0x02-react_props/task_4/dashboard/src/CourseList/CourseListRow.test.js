import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell when isHeader is true', () => {
    const { container } = render(<CourseListRow isHeader={true} textFirstCell='Header Cell' />);
    const thElement = container.querySelector('th');
    expect(thElement).toBeInTheDocument();
    expect(thElement.getAttribute('colSpan')).toBe('2');
  });

  it('renders isHeader true and textSecondCell exists', () => {
    const { container } = render(
      <CourseListRow isHeader={true} textFirstCell="Header Cell 1" textSecondCell="Header Cell 2" />
    );
    const thElement = container.querySelectorAll('th');
    expect(thElement.length).toBe(2);
  });

  it('renders correctly when isHeader is false', () => {
    const { container } = render(
      <CourseListRow isHeader={false} textFirstCell="Data Cell 1" textSecondCell="Data Cell 2" />
    );
    const trElement = container.querySelector('tr');
    const tdElement = container.querySelectorAll('td');
    expect(trElement).toBeInTheDocument();
    expect(tdElement.length).toBe(2);
  });
});
