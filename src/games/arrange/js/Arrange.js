import React, { Component } from 'react';

import '../css/arrange.css';

class Arrange extends Component {
    constructor() {
        super();

        this.state = {
            words: [],
            currentOrder: []
        };
    }

    componentWillMount() {
        let randomWords = [];

        for (let i = 0; i < 5; i++) {
            let randomWord = {
                text: randomQuestion(),
                order: i
            }
        
            randomWords.push(randomWord);
        }

        this.setState({words: randomWords});
    }

    render() {
        const allWords = this.state.words.map((word, i) => {
            return <div className="arrange-word" key={word.id}>{word.text}</div>
        });

        const wordPlaces = this.state.words.map((word, i) => {
            return <div className="arrange-word-place" key={word.id}>{word.text}</div>
        });

        return (
            <div className="arrange-game">
                <header className="arrange-header">
                    <h1 className="arrange-title">Ułóż clickbait</h1>
                </header>
                <div className="arrange-places">
                </div>
                <div className="arrange-words">
                    {allWords}
                </div>
            </div>
        );
    }
}

export default Arrange;

function randomQuestion() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < Math.floor(Math.random() + 1 * 10); i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}