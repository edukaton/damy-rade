import React from 'react';
import { Link } from "react-router-dom";
import '../css/Menu.css';

import DropDown from './DropDown';

function Menu(props) {
    return (
        <div className="menu">
            <Link to='/' className="drop-down-title">START</Link>
            <DropDown title="WIEM">
                <Link to='falszywe-wiadomosci'>FAKE NEWS (fałszywe wiadomości)</Link>
                <Link to='wyludzanie-danych'>PHISHING (wyłudzanie danych)</Link>
                <Link to='blokowanie-reklam'>ADBLOCK (blokowanie reklam)</Link>
                <Link to='spam'>Spam</Link>
                <Link to='click-baity'>Click baity</Link>
                <Link to='memy'>Memy</Link>
                <Link to='framing'>Framing</Link>
                <Link to='manipulacje-jezykowe'>manipulacje językowe</Link>
                <Link to='falszywy-ekspert'>Fałszywy ekspert</Link>
                <Link to='wybieranie-wisienek'>Wybieranie wisienek</Link>
            </DropDown>
            <DropDown title="DZIAŁAM">
                <Link to='/prawda-albo-falsz'>Prawda albo fałsz</Link>
                <Link to='/gra/spam'>SPAM</Link>
                <Link to='/jednoreki'>Jednoreki bandyta</Link>
                <Link to='/d4'>4</Link>
                <Link to='/d5'>5</Link>
            </DropDown>
            <Link to="/pamietnik" className="drop-down-title">PAMIĘTAM</Link>
        </div>
    );
}

export default Menu;