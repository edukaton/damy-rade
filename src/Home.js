import React, { Component } from 'react';
import './Home.css';

import Menu from './Menu';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Menu />
                <div className="content">
                    <div className="header">

                    </div>
                    <div className="theory">
                    </div>
                    <div className="practice">
                    </div>
                    <div className="footer">
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;