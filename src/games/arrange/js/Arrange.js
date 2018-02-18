import React, { Component } from 'react';

import '../css/arrange.css';

import Place from "./Place";
import Word from "./Word";

import examples from "./examples";

class Arrange extends Component {
    constructor() {
        super();

        this.state = {
            example: 0,
            places: [],
            words: [],
            selected: -1,
        };

        this.handleWordPlace = this.handleWordPlace.bind(this);
        this.handleWordSelect = this.handleWordSelect.bind(this);
    }

    componentWillMount() {
        const example = Math.floor(Math.random() * examples.length);

        const currentExample = examples[example];

        let words = currentExample.words;
        let places = currentExample.places;

        shuffle(words);

        this.setState({ example: example, words: words, places: places });
    }

    handleWordSelect(i) {
        let currentSelect = this.state.selected;
        if (i === currentSelect)
            this.setState({ selected: -1 });
        else
            this.setState({ selected: i });
    }

    handleWordPlace(place, word) {
        let places = this.state.places.concat();
        let words = this.state.words.concat();

        places[place].current = word;
        places[place].text = words[word].text;

        this.setState({ places: places, selected: -1 });
    }

    render() {
        let isSelecting = this.state.selected != -1 ? true : false;

        let places = this.state.places.map((place, i) => {
            return <Place
                key={i}
                selecting={isSelecting}
                text={place.text}
                onClick={() => this.handleWordPlace(i, this.state.selected)}
                changable={place.changable}
            />
        });

        let words = this.state.words.map((word, i) => {
            return <Word
                key={i}
                selected={this.state.selected == i ? true : false}
                onClick={() => this.handleWordSelect(i)}
                text={word.text}
            />
        });

        let isOk = true;

        for (let i = 0; i < this.state.places.length; i++) {
            let currentPlace = this.state.places[i];

            if (!currentPlace.changable)
                continue;

            let currentWordInPlace = this.state.places[i].current;

            if (currentWordInPlace == -1) {
                isOk = false;
                continue;
            }

            if (currentPlace.order != this.state.words[currentWordInPlace].goodOrder)
                isOk = false;
        }

        return (
            <div className="arrange-game">
                <header className="arrange-header">
                    <h1 className="arrange-title">Ułóż clickbait</h1>
                </header>
                <div className="arrange-places">
                    {places}
                </div>
                <div className="arrange-words">
                    {words}
                </div>
                {isOk &&
                    <div className="arrange-ok">
                        <p>Jest ok</p>
                    </div>
                }
            </div>
        );
    }
}

export default Arrange;

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}