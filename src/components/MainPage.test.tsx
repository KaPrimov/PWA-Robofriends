import * as React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';
import {IRobot} from '../containers/App';

let wrapper;

type MainPageProps = {
    onRequestRobots: (() => void);
    robots: IRobot[];
    searchField: string;
    onSearchChange: (() => void);
    isPending: boolean;
  }

beforeEach(() => {
    const mockProps: MainPageProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false,
        onSearchChange: jest.fn()
    }
    wrapper = shallow(<MainPage {...mockProps} />)
})

it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
})

it('should not find robots', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [{
            name: 'Pesho',
            email: 'Pesho@pbv.bg',
            id: 1
        }],
        searchField: 'Ivan',
        isPending: false,
        onSearchChange: jest.fn()
    }
    wrapper = shallow(<MainPage {...mockProps} />)
    expect(wrapper.instance().filterRobots()).toEqual([]);
})

it('should find robot', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [
            {
                name: 'Pesho',
                email: 'Pesho@pbv.bg',
                id: 1
            },
            {
                name: 'Ivan',
                email: 'Ivan@pbv.bg',
                id: 2
            }],
        searchField: 'Ivan',
        isPending: false,
        onSearchChange: jest.fn()
    }
    wrapper = shallow(<MainPage {...mockProps} />)
    expect(wrapper.instance().filterRobots()).toEqual([{
        name: 'Ivan',
        email: 'Ivan@pbv.bg',
        id: 2
    }]);
})

it('should find two robots', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [
            {
                name: 'Pesho',
                email: 'Pesho@pbv.bg',
                id: 1
            },
            {
                name: 'Pesho Ivanov',
                email: 'Ivan@pbv.bg',
                id: 2
            }],
        searchField: 'Pesho',
        isPending: false,
        onSearchChange: jest.fn()
    }
    wrapper = shallow(<MainPage {...mockProps} />)
    expect(wrapper.instance().filterRobots()).toEqual([
    {
        name: 'Pesho',
        email: 'Pesho@pbv.bg',
        id: 1
    },
    {
        name: 'Pesho Ivanov',
        email: 'Ivan@pbv.bg',
        id: 2
    }]);
})

it('should write loading when loading', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: true,
        onSearchChange: jest.fn()
    };
    let wrapper = shallow(<MainPage {...mockProps}/>);
    const element = wrapper.find('h1').at(0);
    expect(element.text()).toEqual('Loading');
})

it('should not write loading when not loading', () => {
    const element = wrapper.find('h1').at(0);
    expect(element.text()).toEqual('');
})