import React, { Component } from 'react';
import './Menu.css';

import DropDown from './DropDown';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <DropDown title="Test">
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