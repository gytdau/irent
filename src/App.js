import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Newsfeed from './Newsfeed';
import PropertyDetails from './PropertyDetails';
import GeneralDetails from './GeneralDetails';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Route path="/" exact component={Newsfeed} />
            <Route path="/property" exact component={PropertyDetails} />
            <Route path="/general" exact component={GeneralDetails} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
