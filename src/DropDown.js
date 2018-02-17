import React, { Component } from 'react';

class DropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let visible = this.state.visible;

        console.log(visible);

        visible ? this.setState({visible: false}) : this.setState({visible: true});
    }

    render() {
        let visible = this.state.visible;

        return (
            <div onClick={() => this.handleClick} className="drop-down">
                <li>{this.props.title}</li>
                <p>{Number(visible)}</p>
                {(visible && this.props.chlidren)}
            </div>
        );
    }
}

export default DropDown;