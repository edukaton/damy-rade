import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

function Message(props) {
    let showButtons = !(props.markedAsSpam || props.markedAsGood);
    let classes = "message";
    props.markedAsSpam ? classes += " message-spam" : classes += "";
    props.markedAsGood ? classes += " message-good" : classes += "";

    return (
        <div className={classes}>
            <h2 className="message-title">{props.title}</h2>
            <span className="message-sender">{props.sender}</span>
            <span className="message-date">{props.date}</span>
            <p className="message-text">{props.text}</p>
            <CSSTransitionGroup
                transitionName="animation"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {showButtons && <button className="message-button" onClick={() => props.onSpamClick()}>Spam</button>}
                {showButtons && <button className="message-button" onClick={() => props.onGoodClick()}>Dobra wiadomość</button>}
            </CSSTransitionGroup>
        </div>
    );
}

export default Message;