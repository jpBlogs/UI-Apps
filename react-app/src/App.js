import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import SearchPage from './Components/SearchPage/SearchPage';
import ResultsPage from './Components/ResultsPage/ResultsPage';
import DetailsPage from './Components/DetailsPage/DetailsPage';

class App extends Component {
  render() {
    console.log(this.context.history);
    return (
      <div className="App">
        <div className="App-Header jumbotron">
          <div className="App-Logo col-lg-3">
            <img src={logo} className="App-Logo" alt="logo" />
          </div>
          <div className="col-lg-9">
            <h1>A React App Sample</h1>
          </div>
        </div>
        <div className="App-PageContainer">
          <Switch>
            <Route exact path='/' component={SearchPage}/>
            <Route path="/results" component={ResultsPage}/>
            <Route path="/details/:id/:tab?" component={DetailsPage}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
