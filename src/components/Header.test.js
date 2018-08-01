import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {
  expect(shallow(<Header/>)).toMatchSnapshot();
});

it('should not update', () => {
  const comp = shallow(<Header />)
  const shouldUpdate = comp.instance().shouldComponentUpdate({'prop': 'old'}, {'prop': 'new'})
  expect(shouldUpdate).toBe(false)
})