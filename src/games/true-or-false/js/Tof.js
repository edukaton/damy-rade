import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
        question: "Wrzucił brudne ciuchy do środka, a po 30 minutach… [ZDJĘCIA]",
        subQuestion: "Czy ten nagłówek zawiera manipulację?",
        trueOrFalse: false,
        isTrue: true
    },
    {
        Image: "",
        question: "Zobacz torebkę za 15 tys. TEJ gwiazdy!",
        subQuestion: "Czy jest to clickbait?",
        trueOrFalse: false,
        isTrue: true
    },

]

class Tof extends Component {
    constructor() {
        super();

        this.state = {
            questions: [],
            answered: false,
            goodAnswer: false
        };

        this.handleTrueClick = this.handleTrueClick.bind(this);
        this.handleFalseClick = this.handleFalseClick.bind(this);
        this.handleNextQuestionClick = this.handleNextQuestionClick.bind(this);
    }

    componentWillMount() {
        let localExamples = examples.concat();

        shuffle(localExamples);

        this.setState({ questions: localExamples });
    }

    handleTrueClick() {
        let currentQuestion = this.state.questions[0];

        if (this.state.answered)
            return;

        if (currentQuestion.isTrue)
            this.setState({
                answered: true,
                goodAnswer: true
            });
        else
            this.setState({
                answered: true,
                goodAnswer: false
            });

        console.log(this.state);
    }

    handleFalseClick() {
        let currentQuestion = this.state.questions[0];

        if (this.state.answered)
            return;

        if (currentQuestion.isTrue)
            this.setState({
                answered: true,
                goodAnswer: false
            });
        else
            this.setState({
                answered: true,
                goodAnswer: true
            });
    }

    handleNextQuestionClick() {
        let allQuestions = this.state.questions.concat([]);
        
        allQuestions.splice(0, 1);

        this.setState({questions: allQuestions, answered: false, goodAnswer: false})
    }

    render() {
        if (this.state.questions.length > 0 ){
            let question = this.state.questions[0];

            let questionDOM = <Question
                Image={question.image}
                question={question.question}
                subQuestion={question.subQuestion}
                trueOrFalse={question.trueOrFalse}
                onTrueClick={this.handleTrueClick}
                onFalseClick={this.handleFalseClick}
            />
    
            let answered = this.state.answered;
    
            let goodAnswer = this.state.goodAnswer;
    
            let result;
    
            console.log(this.state)
    
            if (answered && goodAnswer) {
                result = <div className="tof-result tof-result-good"><span>Dobra odpowiedź</span><i className="fa fa-check"></i><button onClick={this.handleNextQuestionClick}>Następne pytanie</button></div>
            }
            else if (answered) {
                result = <div className="tof-result tof-result-bad"><span>Nieprawidłowa odpowiedź</span><i className="fa fa-times"></i><button onClick={this.handleNextQuestionClick}>Następne pytanie</button></div>
            }
    
            return (
                <div className="tof">
                <div className="navback">
            <Link title="Informacje dotyczące subiektywnych dowodów w internecie" to='/wybieranie-wisienek'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzedniego hasła</div></Link>
            </div>
            <div className="navnext">
            <Link title="Zadanie praktyczne o niechcianych wiadomości w internecie" to='/gra/spam'><div className="direction">Przejdź do następnego zadania <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>   
            <div className="instruction">
                INSTRUKCJA: Zaznacz włąściwą odpowiedź klikając w pole TAK lub pole NIE.
            </div>
                <div className="tof-game">
                 
                    {questionDOM}
                    {result}
                </div>
                </div>
            );    
        }
        else {
            return (
            <div>
                <h2>Koniec pytań</h2>
                <div className="navback">
                 <Link title="Informacje dotyczące subiektywnych dowodów w internecie" to='/wybieranie-wisienek'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzedniego hasła</div></Link>
            </div>
            <div className="navnext">
            <Link title="Zadanie praktyczne o niechcianych wiadomości w internecie" to='/gra/spam'><div className="direction">Przejdź do następnego zadania  <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>   
            </div>
            );
        }
    }
}

export default Tof;

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}