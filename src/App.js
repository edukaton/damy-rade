import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Home from "./Home";

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
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
