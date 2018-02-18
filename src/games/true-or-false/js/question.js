import React from 'react';

function Question(props) {
    const image = props.image;
    const question = props.question;
    const subQuestion = props.subQuestion;
    const trueOrFalse = props.trueOrFalse;

    let buttons;

    if (trueOrFalse)
        buttons = <div className="tof-question-buttons"><button>Prawda</button><button>Fałsz</button></div>;
    else
        buttons = <div className="tof-question-buttons"><button>Tak</button><button>Nie</button></div>;

    return (
        <div className="tof-question">
            <h2></h2>
            {subQuestion && <h3></h3>}
            {image && <img src={"./question-images/" + image} />}
            {buttons}
        </div>
    );
}

export default Question;