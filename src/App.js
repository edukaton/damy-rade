import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Menu from './Menu';
import Home from './Home';


class App extends Component {
  constructor() {
    super();
    rgrgrg;
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
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
