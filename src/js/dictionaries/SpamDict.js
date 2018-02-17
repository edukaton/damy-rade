import React from 'react';
import '../../css/Dictionary.css';

function SpamDict(props) {
    return (
        <div className="dictionary">
            <h1 className="dictionary-title">SPAM (niechciane treści), [spam]:</h1>
            <p className="dictionary-p"><span className="bold">SPAM (niechciane treści), [spam]:</span> niechciane lub niepotrzebne wiadomości elektroniczne. Najczęściej spotkasz się z nim za pośrednictwem poczty elektronicznej. Zwykle (choć nie zawsze) jest wysyłany masowo i wykorzystuje metody phishingu. W spamie chodzi o rozsyłanie dużej ilości informacji o jednakowej treści do nieznanych sobie osób.</p>
            <img src={require('./img/spam.png')}/>
            <img src={require('./img/spam1.jpg')}/>
        </div>
    );
}

export default SpamDict;