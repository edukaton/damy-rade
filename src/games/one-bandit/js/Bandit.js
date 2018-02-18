import React, { Component } from 'react';

//import { CSSTransitionGroup }  from 'react-transition-group';

/*
-<Link title="Zadanie praktyczne o niechcianych wiadomości w internecie" to='/gra/spam'>Spam</Link>
+<Link title="Zadanie praktyczne o krzykliwych nagłówkach w internecie" to='/gra/ukladanie'>Układanie</Link>
*/
import '../css/bandit.css';

import examples from "./examples";
import Select from "./Select";

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

  handleChange(i, id) {
    let words = this.state.words.concat([]);
    let word = words[i];

    word.current = id;

    word.text = word.possibilities[word.current].text;

    this.setState({
      words: words
    });
  }

  render() {
    const words = this.state.words.map((word, i) => {
      if (word.changable)
        return <Select key={i} onChange={(id) => this.handleChange(i, id)} title={word.text} words={word.possibilities} />
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