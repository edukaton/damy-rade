import React from 'react';
import { Link } from "react-router-dom";
import '../css/Menu.css';

import DropDown from './DropDown';

function Menu(props) {
    return (
        <div className="menu">
            <Link to='/' className="drop-down-title">START</Link>
            <DropDown title="WIEM">
                <Link to='/1'>FAKE NEWS (fałszywe wiadomości)</Link>
                <Link to='/2'>PHISHING (wyłudzanie danych)</Link>
                <Link to='/3'>ADBLOCK (blokowanie reklam)</Link>
                <Link to='/4'>Spam</Link>
                <Link to='/5'>Click baity</Link>
                <Link to='/6'>Memy</Link>
                <Link to='/7'>Framing</Link>
                <Link to='/8'>manipulacje językowe</Link>
                <Link to='/9'>Fałszywy ekspert</Link>
                <Link to='/10'>Wybieranie wisienek</Link>
            </DropDown>
            <DropDown title="DZIAŁAM">
                <Link to='/prawda-albo-falsz'>Prawda albo fałsz</Link>
                <Link to='/spam'>SPAM</Link>
                <Link to='/jednoreki'>Jednoreki bandyta</Link>
                <Link to='/d4'>4</Link>
                <Link to='/d5'>5</Link>
            </DropDown>
            <Link to="/pamietnik" className="drop-down-title">PAMIĘTAM</Link>
        </div>
    );
}

export default Menu;