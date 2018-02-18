import React from 'react';
import '../../css/Dictionary.css';
import { Link } from "react-router-dom";

function Phishing(props) {
    return (
        <div className="dictionary">
            <div className="navback">
            <Link title="Informacje dotyczące fałszywych wiadomości w internecie" to='/falszywe-wiadomosci'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzedniego hasła</div></Link>
            </div>
        <div className="navnext">
            <Link title="Informacje dotyczące blokowania reklam w internecie" to='/blokowanie-reklam'> <div className="direction">Przejdź do następnego hasła <i className="fa fa-caret-square-o-right"></i></div></Link>
        </div>
            <h1 className="dictionary-title bold">Phishing | (wyłudzanie danych) | [piszing]</h1>
            <p className="dictionary-p">
            <span className="bold">Phishing | (wyłudzanie danych) | [piszing]</span> metoda oszustwa, w której przestępca podszywa się pod inną osobę lub instytucję, w celu wyłudzenia określonych informacji (np. danych logowania, szczegółów karty kredytowej) lub nakłonienia Cię do określonych działań. Bardzo często polega na manipulacji linkiem, po kliknięciu którego przechodzisz na fałszywą stronę pobierającą Twoje dane. Metody pishingowe są stosowane w SPAMie.
            <h2 className="center bold">PRZYKŁADY:</h2>
                <img src={require('./img/phishing.jpg')}/>
                <img src={require('./img/mziarek_pishing_07.jpg')}/>
                <img src={require('./img/phishing-youtube2.jpg')}/> </p>
            <div className="navback">
            <Link title="Informacje dotyczące fałszywych wiadomości w internecie" to='/falszywe-wiadomosci'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzedniego hasła</div></Link>
            </div>
            <div className="navnext">
            <Link title="Informacje dotyczące blokowania reklam w internecie" to='/blokowanie-reklam'> <div className="direction">Przejdź do następnego hasła <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>   
        </div>
    );
}

export default Phishing;