import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

it('should change on input', () => {
    const wrapper = shallow(<SearchBox searchfield="Pesho"/>);
    const input = wrapper.find('input.pa3');
    expect(input.props().value).toEqual('Pesho');
})