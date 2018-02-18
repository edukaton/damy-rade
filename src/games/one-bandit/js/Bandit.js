import React, { Component } from 'react';
import '../css/bandit.css';
import { Link } from "react-router-dom";

import examples from "./examples";
import Select from "./Select";

class Bandit extends Component {
  constructor() {
    super();

    this.state = {
      examples: [],
      example: 0,
      words: [],
      changableIds: []
    };

    this.handleNextQuestion = this.handleNextQuestion.bind(this);
  }

  componentWillMount() {
    let currentExampleId = 0;
    const currentExample = examples[currentExampleId];

    let words = [];
    let changableIds = [];

    for (let i = 0; i < currentExample.length; i++) {
      words.push(currentExample[i]);

      if (currentExample[i].changable)
        changableIds.push(i);
    }

    this.setState({ examples: examples, example: currentExampleId, words: words, changableIds: changableIds });
  }

  handleNextQuestion() {
    let nextQuestion = this.state.example + 1;
    const currentExample = examples[nextQuestion];

    let words = [];
    let changableIds = [];

    for (let i = 0; i < currentExample.length; i++) {
      words.push(currentExample[i]);

      if (currentExample[i].changable)
        changableIds.push(i);
    }

    this.setState({ example: nextQuestion, words: words, changableIds: changableIds });
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

    if (this.state.examples.length == this.state.example)
      return (
        <div className="container">
          <div className="navall">
            <div className="navback">
              <Link title="Zadanie praktyczne o niechcianych wiadomości w internecie" to='/gra/spam'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzedniego zadania</div></Link>
            </div>
            <div className="navnext">
              <Link title="Zadanie praktyczne o krzykliwych nagłówkach w internecie" to='/gra/ukladanie'><div className="direction">Przejdź do nastęnego zadania <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>
          </div>
          <header className="header">
            <h1 className="title">Koniec gry</h1>
          </header>
        </div>
      );
    else
      return (
        <div className="container">
          <div className="navall">
            <div className="navback">
              <Link title="Zadanie praktyczne o niechcianych wiadomości w internecie" to='/gra/spam'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzedniego zadania</div></Link>
            </div>
            <div className="navnext">
              <Link title="Zadanie praktyczne o krzykliwych nagłówkach w internecie" to='/gra/ukladanie'><div className="direction">Przejdź do nastęnego zadania <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>
          </div>
          <header className="header">
            <h1 className="title">Kasyno wiedzy</h1>
          </header>
          <div className="instruction">
            INSTRUKCJA: W zdaniu możesz pozmieniać pewne wyrazy. Naciśnij przycisk strzałki w dół, aby rozwinąć listę z podpowiedziami.  Zadanie będzie wykonane prawidłowo, gdy ułożone przez Ciebie zdanie będzie rzetelną informacją, pozbawioną manipulacji.
            </div>
          <div className="bandit-game">
            <div className="bandit-words">
              {words}
            </div>
            {isGood && <button onClick={this.handleNextQuestion}>Następne zadanie</button>}
          </div>
        </div>
      );
  }
}

export default Bandit;