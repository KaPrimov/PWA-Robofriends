import * as React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('renders without crashing', () => {
  expect(shallow(<CounterButton color='red' />)).toMatchSnapshot();
});

it('correnctly increments the counter', () => {
  const wrapper = shallow(<CounterButton color='red' />)
  expect(wrapper).toMatchSnapshot();
  wrapper.find('[id="counter"]').simulate('click');
  expect((wrapper.state()).count).toEqual(1)
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect((wrapper.state()).count).toEqual(3)
});