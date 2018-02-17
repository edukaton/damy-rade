import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../css/App.css';

import Menu from './Menu';
import Home from './Home';

import Tof from '../games/true-or-false/js/Tof';
import Spam from '../games/spam/js/Spam';
import Bandit from '../games/one-bandit/js/Bandit';
import Arrange from '../games/arrange/js/Arrange';

import FakeNews from './dictionaries/FakeNews';
import Phishing from './dictionaries/Phishing';
import AdBlock from './dictionaries/AdBlock';
import SpamDict from './dictionaries/SpamDict';
import ClickBaity from './dictionaries/ClickBaity';
import Memy from './dictionaries/Memy';
import Framing from './dictionaries/Framing';
import Manipulation from './dictionaries/Manipulation';
import FakeExpert from './dictionaries/FakeExpert';
import Cherry from './dictionaries/Cherry';

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
            <Route exact path="/gra/spam" component={Spam} />
            <Route exact path="/gra/ukladanie" component={Arrange} />
            <Route exact path="/jednoreki" component={Bandit} />
            <Route exact path="/falszywe-wiadomosci" component={FakeNews} />
            <Route exact path="/wyludzanie-danych" component={Phishing} />
            <Route exact path="/blokowanie-reklam" component={AdBlock} />
            <Route exact path="/spam" component={SpamDict} />
            <Route exact path="/click-baity" component={ClickBaity} />
            <Route exact path="/memy" component={Memy} />
            <Route exact path="/framing" component={Framing} />
            <Route exact path="/manipulacje-jezykowe" component={Manipulation} />
            <Route exact path="/falszywy-ekspert" component={FakeExpert} />
            <Route exact path="/wybieranie-wisienek" component={Cherry} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;