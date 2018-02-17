import React from 'react';
import { Link } from "react-router-dom";
import '../css/Menu.css';

import DropDown from './DropDown';

function Menu(props) {
    return (
        <div className="menu">
            <Link to='/' className="drop-down-title">START</Link>
            <DropDown title="WIEM">
                <Link to='/1'>1</Link>
                <Link to='/2'>2</Link>
                <Link to='/3'>3</Link>
                <Link to='/4'>4</Link>
                <Link to='/5'>5</Link>
                <Link to='/6'>6</Link>
                <Link to='/7'>7</Link>
                <Link to='/8'>8</Link>
                <Link to='/9'>9</Link>
                <Link to='/10'>10</Link>
            </DropDown>
            <DropDown title="DZIAŁAM">
                <Link to='/spam'>SPAM</Link>
                <Link to='/d2'>2</Link>
                <Link to='/d3'>3</Link>
                <Link to='/d4'>4</Link>
                <Link to='/d5'>5</Link>
            </DropDown>
        </div>
    );
}

export default Menu;