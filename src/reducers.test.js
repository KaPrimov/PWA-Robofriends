import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('search robots', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
    });

    it('should handle change', () => {
        expect(reducers
            .searchRobots(initialStateSearch, {type: CHANGE_SEARCHFIELD, payload: 'Pesho'}))
            .toEqual({searchField: 'Pesho'});
    })
})

describe('request robots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
      }
    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    });

    it('should handle pending robots', () => {
        expect(reducers
            .requestRobots(initialStateRobots, {type: REQUEST_ROBOTS_PENDING}))
            .toEqual({robots: [], isPending: true});
    })

    it('should handle success robots', () => {
        const robotPayload = [{
            id: 1,
            name: 'Pesho',
            email: "Pesho@gmail.com"
        }];
        expect(reducers
            .requestRobots(initialStateRobots, {type: REQUEST_ROBOTS_SUCCESS, payload: robotPayload}))
            .toEqual({robots: robotPayload, isPending: false});
    })

    it('should handle pending robots', () => {
        expect(reducers
            .requestRobots(initialStateRobots, {type: REQUEST_ROBOTS_FAILED, payload: 'error'}))
            .toEqual({error: 'error', isPending: false, robots: []});
    })
})