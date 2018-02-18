import React from 'react';
import '../../css/Dictionary.css';
import { Link } from "react-router-dom";

function AdBlock(props) {
    return (
        <div className="dictionary">
            <div className="navback">
                <Link title="Informacje dotyczące wyłudzeń danych w internecie" to='/wyludzanie-danych'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do phishing</div></Link>
            </div>
            <div className="navnext">
                <Link title="Informacje dotyczące niechcianych wiadomości w internecie" to='/spam'><div className="direction">Przejdź do Spam <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>
        <h1 className="dictionary-title">ADBLOCK (blokowanie reklam)</h1>
        
        
            <p className="dictionary-p"><span className="bold">ADBLOCK (blokowanie reklam), [adblok]:</span> wtyczka dla przeglądarek internetowych która umożliwia blokowanie wyświetlania internetowych reklam. Rozszerzenie nie tyle filtruje załadowaną wcześniej treść, ale w ogóle nie ściąga reklam, co przyczynia się do ograniczenia ruchu w sieci.<br />

            Przeglądarki wspierane przez AdBlocka to: Google Chrome, Firefox, Safari i Opera. AdBlock jest dostępny w ponad 35 językach.</p>
            <span className="bold">Gdzie pobrać? </span> 
            <a href="https://getadblock.com">Pobierz</a>
            <h2 className="bold center">JAKIE REKLAMY BLOKUJE?</h2>
            <img src={require('./img/wynik-Google-gora.jpg')}/>
            <img src={require('./img/139906.png')}/>
           
            <div className="navback">
                <Link title="Informacje dotyczące wyłudzeń danych w internecie" to='/wyludzanie-danych'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do phishing</div></Link>
            </div>
            <div className="navnext">
                <Link title="Informacje dotyczące niechcianych wiadomości w internecie" to='/spam'><div className="direction">Przejdź do Spam <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>
        </div>
    );
}

export default AdBlock;