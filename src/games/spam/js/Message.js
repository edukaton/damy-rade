import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class Message extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropped: false
        };
    }

    handleClick() {
        let dropped = this.state.dropped;

        dropped ? this.setState({dropped: false}) : this.setState({dropped: true});
    }

    render() {
        let showButtons = !(this.props.markedAsSpam || this.props.markedAsGood);
        let classes = "message";
        this.props.markedAsSpam ? classes += " message-spam" : classes += "";
        this.props.markedAsGood ? classes += " message-good" : classes += "";

        return (
            <div className={classes}>
                <h2 className="message-title">{this.props.title}</h2>
                <span className="message-sender">{this.props.sender}</span>
                <span className="message-text">{this.props.text}</span>
                <span className="message-date">{this.props.date}</span>
                <CSSTransitionGroup
                    transitionName="animation"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {showButtons && <button className="message-button" onClick={() => this.props.onSpamClick()}>Spam</button>}
                    {showButtons && <button className="message-button" onClick={() => this.props.onGoodClick()}>Dobra wiadomość</button>}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default Message;