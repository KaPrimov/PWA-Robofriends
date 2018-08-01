import React from 'react';
import { mount } from 'enzyme';
import SearchBox from './SearchBox';

it('should change on input', () => {
    const wrapper = mount(<SearchBox />);
    wrapper.find('input.pa3').simulate('change', {target: {value: 'My new value'}});
    console.log('heeey ', wrapper.find('input.pa3').html);
    expect(wrapper.find('input.pa3').html()).toEqual('My new value');
})