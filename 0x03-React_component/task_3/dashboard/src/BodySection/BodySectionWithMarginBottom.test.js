import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { describe } from 'node:test';

describe('BodySectionWithMarginBottom tests', () => {
  it('renders correctly with props passed to BodySection', () => {
    const title = 'test title';
    const children = <p>test children node</p>;
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );

    const bodySectionComponent = wrapper.find(BodySection);
    expect(bodySectionComponent).toHaveLength(1);
    expect(bodySectionComponent.props()).toEqual({ title, children });
  });
});
