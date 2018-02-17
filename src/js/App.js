import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../css/App.css';

import Menu from './Menu';
import Home from './Home';

import Tof from '../games/true-or-false/js/Tof';
import Spam from '../games/spam/js/Spam';
import Bandit from '../games/one-bandit/js/Bandit';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentWillMount() {
    if (localStorage.getItem('login')) {
      console.log(localStorage.getItem('login'));
    }
  }

  render() {
    return (
      <Router>
        <div className="page">
          <Menu />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/prawda-albo-falsz" component={Tof} />
            <Route exact path="/spam" component={Spam} />
            <Route exact path="/jednoreki" component={Bandit} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;