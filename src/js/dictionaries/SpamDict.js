import React from 'react';
import '../../css/Dictionary.css';
import { Link } from "react-router-dom";

function SpamDict(props) {
    return (
        <div className="dictionary">
            <div className="navback">
            <Link title="Informacje dotyczące blokowania reklam w internecie" to='/blokowanie-reklam'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzedniego hasła</div></Link>
            </div>
            <div className="navnext">
            <Link title="Informacje dotyczące krzykliwych nagłówków w internecie" to='/click-baity'><div className="direction">Przejdź do następnego hasła <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>
            <h1 className="dictionary-title bold">SPAM | (niechciane treści) | [spam] </h1>
            <p className="dictionary-p"><span className="bold">SPAM | (niechciane treści) | [spam] </span> niechciane lub niepotrzebne wiadomości elektroniczne. Najczęściej spotkasz się z nim za pośrednictwem poczty elektronicznej. Zwykle (choć nie zawsze) jest wysyłany masowo i wykorzystuje metody phishingu.
            W spamie chodzi o rozsyłanie dużej ilości informacji o jednakowej treści do nieznanych sobie osób.
            <img src={require('./img/spam.png')}/>
            <img src={require('./img/spam1.jpg')}/></p>
            <div className="navback">
            <Link title="Informacje dotyczące blokowania reklam w internecie" to='/blokowanie-reklam'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzedniego hasła</div></Link>
            </div>
            <div className="navnext">
            <Link title="Informacje dotyczące krzykliwych nagłówków w internecie" to='/click-baity'><div className="direction">Przejdź do następnego hasła <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>
        </div>
    );
}

export default SpamDict;