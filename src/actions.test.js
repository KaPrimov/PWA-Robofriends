import * as actions from './actions';
import fetchMock from 'fetch-mock'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants'

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);
beforeEach(() => {
    fetchMock.restore();
    fetchMock.reset();
  })
describe('search robots actions', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('should create action to search robots', () => {
        expect(actions.setSearchField('Pesho')).toEqual({ type: CHANGE_SEARCHFIELD, payload: 'Pesho' });
    });
});

const store = mockStore();

it('handles request robots api', () => {
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    }
    store.dispatch(actions.requestRobots());
    const action = store.getActions()[0];
    expect(action).toEqual(expectedAction);
})

it('handles success request robots api', () => {
    const expectedAction = [
        { type: REQUEST_ROBOTS_PENDING },
        { type: REQUEST_ROBOTS_PENDING },
        { type: REQUEST_ROBOTS_SUCCESS,
        payload: {data: [{id: 1, name: 'Pesho', email: 'Pesho@abv.bg'}]}}]
        fetchMock
            .getOnce('https://jsonplaceholder.typicode.com/users', { body: { data: [{id: 1, name: 'Pesho', email: 'Pesho@abv.bg'}] }, headers: { 'content-type': 'application/json' } })
    return store.dispatch(actions.requestRobots()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
    })
})

it('handles error request robots api', () => {
   fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', {throws: 'Error'})
    
        try {
            store.dispatch(actions.requestRobots());
        } catch (error) {
            expect(error).toEqual('Error')
        }
})