import React from 'react';
import '../css/tof.css';

function Question(props) {
    const image = props.image;
    const question = props.question;
    const subQuestion = props.subQuestion;
    const trueOrFalse = props.trueOrFalse;

    let buttons;

    if (trueOrFalse)
        buttons = <div className="tof-question-buttons"><button className="button" onClick={props.onTrueClick}>Prawda</button><button className="button" onClick={props.onFalseClick}>Fałsz</button></div>;
    else
        buttons = <div className="tof-question-buttons"><button className="button" onClick={props.onTrueClick}>Tak</button><button className="button" onClick={props.onFalseClick}>Nie</button></div>;

    return (
        <div className="tof-question">
            <h2>{question}</h2>
            {subQuestion && <h3>{subQuestion}</h3>}
            {image && <img src={"./question-images/" + image} />}
            {buttons}
        </div>
    );
}

export default Question;