import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection tests', () => {
  it('render correctly with title and children', () => {
    const title = 'test title';
    const children = <p>test children node</p>;
    const wrapper = shallow(<BodySection title={title}>{children}</BodySection>);

    const h2Element = wrapper.find('h2');
    expect(h2Element).toHaveLength(1);
    expect(h2Element.text()).toBe(title);

    const pElement = wrapper.find('p');
    expect(pElement).toHaveLength(1);
    expect(pElement.text()).toBe('test children node');
  });
});
