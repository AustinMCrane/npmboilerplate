import expect from 'expect';
import SomeClass from '../';
import React from 'react';
import { mount, shallow } from 'enzyme';

describe('SomeClass', () => {
  it('should render SomeClass', () => {
    const wrapper = mount(<SomeClass />);
    // expect(SomeClass.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
