import * as React  from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

import MainPage from '../components/MainPage'

import './App.css';

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

type IAppProps = {
  onRequestRobots: (() => void);
  robots: IRobot[];
  searchField: string;
  onSearchChange?: (() => void);
  isPending?: boolean;
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component<IAppProps> {
  render() {
    return <MainPage {...this.props}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)