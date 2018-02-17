import React, { Component } from 'react';
import '../css/Menu.css';

import DropDown from './DropDown';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <DropDown title="Test" className="menu">
                        <li>Hehhehehhe</li>
                        <li>Hehhehehhe</li>
                        <li>Hehhehehhe</li>
                    </DropDown>
                </ul>
            </div>
        );
    }
}

export default Menu;