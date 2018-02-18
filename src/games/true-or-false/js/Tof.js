import React, { Component } from 'react';

import '../css/tof.css';

import Question from './question';

const examples = [
    {
        Image: "",
        question: "PHISHING najczęściej występuje w wiadomościach e-mail zwanych potocznie SPAMem.",
        subQuestion: "",
        trueOrFalse: true,
        isTrue: true
    },
    {
        Image: "",
        question: "PHISHING najczęściej występuje w wiadomościach e-mail zwanych potocznie SPAMem.",
        subQuestion: "Czy ten nagłówek zawiera manipulację? ",
        trueOrFalse: false,
        isTrue: true
    },
]

class Tof extends Component {
    constructor() {
        super();

        this.state = {
            currentQuestion: 0,
            questions: []
        };

        this.handleTrueClick = this.handleTrueClick.bind(this);
        this.handleFalseClick = this.handleFalseClick.bind(this);
    }

    componentWillMount() {

    }

    handleTrueClick() {

    }

    handleFalseClick() {
    
    }

    render() {
        let currentQuestion = this.state.currentQuestion;
        let questionsNumber = this.state.questionsNumber;

        if (currentQuestion < questionsNumber) {
            let question = <h2>{this.state.questions[currentQuestion].text}</h2>;

            return (
                /*
                -<Link title="Informacje dotyczące subiektywnych dowodów w internecie" to='/wybieranie-wisienek'>Wybieranie wisienek</Link>
                +<Link title="Zadanie praktyczne o niechcianych wiadomości w internecie" to='/gra/spam'>Spam</Link>
                */
                <div className="tof-game">
                    <header className="header">
                        <h1 className="title">Czy to zdanie jest prawdziwe?</h1>
                    </header>
                    <div className="question">
                            {question}
                        <button onClick={this.handleTrueClick}>Prawda</button>
                        <button onClick={this.handleFalseClick}>Fałsz</button>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="tof-game">
                    <h2>Koniec</h2>
                </div>
            );
        }
    }
}

export default Tof;