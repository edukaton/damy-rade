import React, { Component } from 'react';

class Select extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropped: false,
            selected: 0
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleDroppedClick = this.handleDroppedClick.bind(this);
    }

    handleClick() {
        let dropped = this.state.dropped;

        dropped ? this.setState({ dropped: false }) : this.setState({ dropped: true });
    }

    handleDroppedClick(i) {
        this.props.onChange(i);

        this.setState({dropped: false, selected: i});
    }

    render() {
        let words = this.props.words.map((word, i) => {
            return <div onClick={() => this.handleDroppedClick(i)} className="bandit-dropped" key={word.text}>{word.text}</div>
        });

        let dropped = this.state.dropped;
        let isGood = this.props.words[this.state.selected].good;

        let classes = "bandit-word changable";

        if (dropped) classes += " dropped";
        if (isGood) classes += " good";

        return (
            <div className="bandit-drop">
                <div className={classes} onClick={this.handleClick}>
                    <span>{this.props.title}</span>
                </div>
                <div className="bandit-drop-box">
                    {dropped && words}
                </div>
            </div>
        );
    }
}

export default Select;