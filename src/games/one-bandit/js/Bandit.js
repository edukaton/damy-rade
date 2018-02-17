import React, { Component } from 'react';

//import { CSSTransitionGroup }  from 'react-transition-group';
import '../css/bandit.css';

import examples from "./examples";

class Bandit extends Component {
  constructor() {
    super();

    this.state = {
      example: 0,
      words: [],
      changableIds: []
    };
  }

  componentWillMount() {
    const example = Math.floor(Math.random() * examples.length);

    const currentExample = examples[example];

    let words = [];
    let changableIds = [];

    for (let i = 0; i < currentExample.length; i++) {
      words.push(currentExample[i]);

      if (currentExample[i].changable)
        changableIds.push(i);
    }

    this.setState({ example: example, words: words, changableIds: changableIds });
  }

  handleChange(id) {
    let words = this.state.words.concat([]);
    let word = words[id];

    word.current = word.current + 1 < word.possibilities.length ? word.current + 1 : 0;

    word.text = word.possibilities[word.current].text;

    this.setState({
      words: words
    });
  }

  render() {
    const words = this.state.words.map((word, i) => {
      if (word.changable)
        return <div key={i} onClick={() => this.handleChange(i)} className="bandit-word changable">{word.text}</div>
      else
        return <div key={i} className="bandit-word">{word.text}</div>
    });

    let changableIds = this.state.changableIds;
    let allWords = this.state.words;

    let goodArray = [];
    let isGood = true;

    for (let i = 0; i < changableIds.length; i++) {
      if (allWords[changableIds[i]].possibilities[allWords[changableIds[i]].current].good)
        goodArray.push(true);
      else
      goodArray.push(false);
    }

    for (let i = 0; i < goodArray.length; i++) {
      if (goodArray[i] == false)
        isGood = false;
    }

    return (
      <div className="bandit-game">
        <div className="bandit-words">
          {words}
        </div>
        {isGood && <div>Jest ok</div>}
      </div>
    );
  }
}

export default Bandit;