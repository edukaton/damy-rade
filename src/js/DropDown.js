import React, { Component } from 'react';

import { CSSTransitionGroup } from 'react-transition-group';

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

        visible ? this.setState({ visible: false }) : this.setState({ visible: true });
    }

    render() {
        let visible = this.state.visible;

        return (
            <div className="drop-down">
                <a href="#" className="drop-down-title" onClick={this.handleClick}>{this.props.title}</a>
                <CSSTransitionGroup
                    transitionName="test"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {(visible &&
                        <div className="drop-down-content">{this.props.children}</div>
                    )}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default DropDown;