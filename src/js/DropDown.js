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

        visible ? this.setState({visible: false}) : this.setState({visible: true});
    }

    render() {
        let visible = this.state.visible;

        return (
            <div className="drop-down">
                <li className="drop-down-title" onClick={this.handleClick}>{this.props.title}</li>
                {(visible && this.props.children)}
            </div>
        );
    }
}

export default DropDown;