import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/arrange.css';

import Place from "./Place";
import Word from "./Word";

import examples from "./examples";

class Arrange extends Component {
    constructor() {
        super();

        this.state = {
            examples: [],
            words: [],
            selected: -1,
            currentStep: 0,
            steps: []
        };

        this.handleWordPlace = this.handleWordPlace.bind(this);
        this.handleWordSelect = this.handleWordSelect.bind(this);
        this.handleStepBack = this.handleStepBack.bind(this);
        this.handleNextQuestion = this.handleNextQuestion.bind(this)
    }

    componentWillMount() {
        let currentExample = 0;
        let words = examples[currentExample].words.slice();
        let places = examples[currentExample].places.slice();
        let steps = [{
            places: places
        }];

        shuffle(words);

        this.setState({ examples: examples.slice(), example: currentExample, words: words, steps: steps });
    }

    handleNextQuestion() {
        let currentExample = this.state.example + 1;
        let words = examples[currentExample].words.slice();
        let places = examples[currentExample].places.slice();
        let steps = [{
            places: places
        }];

        shuffle(words);

        this.setState({example: currentExample, words: words, steps: steps, currentStep: 0 });
    }

    handleWordSelect(i) {
        let currentSelect = this.state.selected;
        if (i === currentSelect)
            this.setState({ selected: -1 });
        else
            this.setState({ selected: i });
    }

    handleWordPlace(place, word) {
        const currentStep = this.state.currentStep;
        const words = this.state.words.slice();
        const steps = this.state.steps;
        const current = steps[currentStep];
        const step = JSON.parse(JSON.stringify(current.places.slice()));

        step[place].current = word;
        step[place].text = words[word].text;

        this.setState({
            steps: steps.concat([{
                places: step
            }]),
            selected: -1,
            currentStep: currentStep + 1
        });
    }

    handleStepBack() {
        const steps = JSON.parse(JSON.stringify(this.state.steps));

        this.setState({
            currentStep: this.state.currentStep - 1,
            steps: steps.splice(0, steps.length - 1)
        });
    }

    render() {
        if (this.state.example == this.state.examples.length) {
            return (
                <div className="arrange-game"><h2>Koniec gry</h2></div>
            );
        }
        let notFirstStep = !(this.state.currentStep == 0);

        let isSelecting = this.state.selected != -1 ? true : false;

        let currentStep = this.state.currentStep;

        let places = this.state.steps[currentStep].places.map((place, i) => {
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
        let allFilled = true;

        for (let i = 0; i < this.state.steps[currentStep].places.length; i++) {
            let currentPlace = this.state.steps[currentStep].places[i];

            if (!currentPlace.changable)
                continue;

            let currentWordInPlace = this.state.steps[currentStep].places[i].current;

            if (currentWordInPlace == -1) {
                isOk = false;
                allFilled = false;
                continue;
            }

            if (currentPlace.order != this.state.words[currentWordInPlace].goodOrder)
                isOk = false;
        }

        let result;
        console.log(this.state)

        if (isOk)
            result = <div className="arrange-done arrange-ok">Jest dobrze <i className="fa fa-check"></i></div>
        else if (!isOk && allFilled)
            result = <div className="arrange-done arrange-wrong">Coś jest nie tak <i className="fa fa-times"></i></div>
        
        return (
            <div className="cal">
            <div className="navback">
            <Link title="Zadanie praktyczne o krzykliwych nagłówkach w internecie" to='/jednoreki'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do </div></Link>
            </div>
            <div className="navnext">
            <Link title="Strona główna" to='/'><div className="direction">Przejdź do  strony głównej.<i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>
            <div className="arrange-game">
            
                <header className="arrange-header">
                    <h2 className="arrange-title">Z podanych wyrazów ułóż nagłówek, który ma charakter click baita</h2>
                </header>
                <div className="arrange-places">
                    {places}
                </div>
                <div className="arrange-words">
                    {words}
                </div>
                {notFirstStep && ! isOk && <button className="arrange-step-back button" onClick={this.handleStepBack}>Cofnij</button>}
                {allFilled && result}
                {isOk && <button className="button" onClick={this.handleNextQuestion}>Następne pytanie</button>}
            </div>
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