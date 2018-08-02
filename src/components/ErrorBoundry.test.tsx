import * as React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundry from './ErrorBoundry';
import Card from './Card';
const robots = [{
                            id: 1,
                            name: 'Leanne Graham',
                            username: 'Bret',
                            email: 'Sincere@april.biz'
                        }].map(robot => <Card 
                                        id={robot.id}
                                        name={robot.name}
                                        email={robot.email}/>);

it('should return error message when error is present', () => {
    const component = shallow(<ErrorBoundry />);
    component.setState({hasError: true});
    expect(component.find('h1').length).toEqual(1);
})

it('should nor return error message when no error is present', () => {
    const component = shallow(<ErrorBoundry children={robots}/>);
    component.setState({hasError: false});
    expect(component.find('h1').length).toEqual(0);
    expect(component).toMatchSnapshot();
})