import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';
import { IRobot } from './containers/App';

interface IAction {
  type: string;
  payload: any;
}

interface IInitialStateSearch {
  searchField: string;
}

const initialStateSearch: IInitialStateSearch = {searchField: ''}

export const searchRobots = (state: IInitialStateSearch = initialStateSearch, action: IAction) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }
}

interface IInitialStateRobots {
  robots: IRobot[];
  isPending: boolean;
}

const initialStateRobots: IInitialStateRobots = {robots: [], isPending: false};

export const requestRobots = (state: IInitialStateRobots = initialStateRobots, action: IAction) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {robots: action.payload, isPending: false})
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}