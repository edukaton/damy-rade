import React from 'react';
import { Link } from "react-router-dom";
import '../css/Menu.css';

import DropDown from './DropDown';

function Menu(props) {
    return (
        <div className="menu">
            <Link title="Strona główna" to='/' className="drop-down-title">START</Link>
            <DropDown srtitle="Kliknij, aby rozwinąć zawartość słowniczka" title="WIEM">
                <Link title="Informacje dotyczące fałszywych wiadomości w internecie" to='/falszywe-wiadomosci'>Fake news</Link>
                <Link title="Informacje dotyczące wyłudzeń danych w internecie" to='/wyludzanie-danych'>Phishing</Link>
                <Link title="Informacje dotyczące blokowania reklam w internecie" to='/blokowanie-reklam'>Adblock</Link>
                <Link title="Informacje dotyczące niechcianych wiadomości w internecie" to='/spam'>Spam</Link>
                <Link title="Informacje dotyczące krzykliwych nagłówków w internecie" to='/click-baity'>Click baity</Link>
                <Link title="Informacje dotyczące śmiesznych obrazków w internecie" to='/memy'>Memy</Link>
                <Link title="Informacje dotyczące pomijania informacji w internecie" to='/framing'>Framing</Link>
                <Link title="Informacje dotyczące manipulowania językiem w internecie" to='/manipulacje-jezykowe'>Manipulacje językowe</Link>
                <Link title="Informacje dotyczące fałszywych ekspertów w internecie" to='/falszywy-ekspert'>Fałszywy ekspert</Link>
                <Link title="Informacje dotyczące subiektywnych dowodów w internecie" to='/wybieranie-wisienek'>Wybieranie wisienek</Link>
            </DropDown>
            <DropDown srtitle="Kliknij, aby rozwinąć zawartość zadania praktyczne" title="DZIAŁAM">
                <Link title="Zadanie praktyczne o fałszywych informacjach i wyłudzeniach danych" to='/prawda-albo-falsz'>Prawda albo fałsz</Link>
                <Link title="Zadanie praktyczne o niechcianych wiadomości w internecie" to='/gra/spam'>Spam</Link>
                <Link title="Zadanie praktyczne o krzykliwych nagłówkach w internecie" to='/jednoreki'>Jednoreki bandyta</Link>
                <Link title="Zadanie praktyczne o krzykliwych nagłówkach w internecie" to='/gra/ukladanie'>Układanie</Link>
                <Link title="Zadanie praktyczne o krzykliwych nagłówkach w internecie" to='/d5'>5</Link>
            </DropDown>
            <Link title="Miejsce do przygotowania własnych notatek" to="/pamietnik" className="drop-down-title">PAMIĘTAM</Link>
        </div>
    );
}

export default Menu;