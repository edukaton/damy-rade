import React, { Component } from 'react';

import { CSSTransitionGroup } from 'react-transition-group';
import '../css/bandit.css';

class Bandit extends Component {
  constructor() {
    super();

    this.state = {
      words: []
    };
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="bandit-game">
        <p>Hashashh</p>
      </div>
    );
  }
}

export default Bandit;