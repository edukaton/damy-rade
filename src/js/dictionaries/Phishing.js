import React from 'react';
import '../../css/Dictionary.css';

function Phishing(props) {
    return (
        /*
        -<Link title="Informacje dotyczące fałszywych wiadomości w internecie" to='/falszywe-wiadomosci'>Fake news</Link>
        +<Link title="Informacje dotyczące blokowania reklam w internecie" to='/blokowanie-reklam'>Adblock</Link>
        */
        <div className="dictionary">
            <h1 className="dictionary-title">PHISHING (wyłudzanie danych)</h1>
            <p className="dictionary-p">
            <span className="bold">PHISHING (wyłudzanie danych), [piszing]:</span> metoda oszustwa, w której przestępca podszywa się pod inną osobę lub instytucję, w celu wyłudzenia określonych informacji (np. danych logowania, szczegółów karty kredytowej) lub nakłonienia Cię do określonych działań. Bardzo często polega na manipulacji linkiem, po kliknięciu którego przechodzisz na fałszywą stronę pobierającą Twoje dane. </p>
            <h2 className="center bold">PRZYKŁADY:</h2>
                <img src={require('./img/phishing.jpg')}/>
                <img src={require('./img/mziarek_pishing_07.jpg')}/>
                <img src={require('./img/phishing-youtube2.jpg')}/>     
        </div>
    );
}

export default Phishing;