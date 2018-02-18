import React from 'react';
import '../../css/Dictionary.css';

function ClickBaity(props) {
    return (
        /*
        -<Link title="Informacje dotyczące niechcianych wiadomości w internecie" to='/spam'>Spam</Link>
        +<Link title="Informacje dotyczące śmiesznych obrazków w internecie" to='/memy'>Memy</Link>
        */
        <div className="dictionary">
            <h1 className="dictionary-title">Click baity (treści klikalne) ; [klik bajty]:</h1>
            <p className="dictionary-p"><span className="blod">Click baity (treści klikalne) ; [klik bajty]:</span> sensacyjny nagłówek lub miniaturka przyciągającą wzrok. Ma zachęcić Cię do kliknięcia w materiał. Zazwyczaj żeruje na ludzkiej ciekawości - zawiera informacje, które z dużym prawdopodobieństwem Cię zaciekawią. Jednak aby dotrzeć do rozwinięcia, konieczne jest kliknięcie w materiał. </p>
            <h2 className="bold center">Przykłady:</h2>
                <h2>„Powstał lek na łysienie. Sprawdź gdzie możesz go kupić!”<br />
                „Nie uwierzycie co włożyła na siebie TA kobieta”<br />
                „Merkel pije alkohol w trakcie wywiadu? Przyjrzyj się uważnie”<br />
                „Co za ciało! Słynna polska dziennikarka w Playboy’u”</h2>
        </div>
    );
}

export default ClickBaity;