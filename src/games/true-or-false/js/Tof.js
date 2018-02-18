import React, { Component } from 'react';

import { CSSTransitionGroup } from 'react-transition-group';
import '../css/tof.css';

class Tof extends Component {
    constructor() {
        super();

        let questionsNumber = 5;

        this.state = {
            currentQuestion: 0,
            questionsNumber: questionsNumber,
            questions: []
        };

        this.handleTrueClick = this.handleTrueClick.bind(this);
        this.handleFalseClick = this.handleFalseClick.bind(this);
    }

    componentWillMount() {
        let randomQuestions = [];

        for (let i = 0; i < this.state.questionsNumber; i++) {
            let question = {
                id: i,
                text: randomQuestion(),
                isTrue: Math.floor(Math.random() * 2),
                markedAsTrue: false,
            };

            randomQuestions.push(question);
        }

        this.setState({
            ...this.state,
            questions: randomQuestions
        });
    }

    handleTrueClick() {
        let newQuestions = this.state.questions.map(question => {
            if (question.id == this.state.currentQuestion)
                question.markedAsTrue = true

            return question
        })

        this.setState({
            ...this.state,
            currentQuestion: this.state.currentQuestion + 1,
            questions: newQuestions
        });
    }

    handleFalseClick() {
        this.setState({
            ...this.state,
            currentQuestion: this.state.currentQuestion + 1,
        });
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
                        <CSSTransitionGroup
                            transitionName="tof-animation"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}
                        >
                            {question}
                        </CSSTransitionGroup>
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

function randomQuestion() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < Math.floor(Math.random() + 1 * 10); i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    text += "?";

    return text;
}