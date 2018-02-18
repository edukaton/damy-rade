import React from 'react';
import '../../css/Dictionary.css';
import { Link } from "react-router-dom";

function ClickBaity(props) {
    return (
       
        <div className="dictionary">
            <div className="navback">
                <Link title="Informacje dotyczące niechcianych wiadomości w internecie" to='/spam'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzedniego hasła</div></Link>
            </div>
            <div className="navnext">
                <Link title="Informacje dotyczące śmiesznych obrazków w internecie" to='/memy'><div className="direction">Przejdź do następnego hasła <i class="fa fa-caret-square-o-right"></i></div></Link>
            </div>
            <h1 className="dictionary-title bold">Click baity | (treści klikalne) | [klik bajty]</h1>
            <p className="dictionary-p"><span className="bold">Click baity | (treści klikalne) | [klik bajty]</span> sensacyjny nagłówek lub miniaturka przyciągającą wzrok. Ma zachęcić Cię do kliknięcia w materiał. Zazwyczaj żeruje na ludzkiej ciekawości - zawiera informacje, które z dużym prawdopodobieństwem Cię zaciekawią. Jednak aby dotrzeć do rozwinięcia, konieczne jest kliknięcie w materiał. 
            <h2 className="bold center">Przykłady:</h2>
                <h2>„Powstał lek na łysienie. Sprawdź gdzie możesz go kupić!”<br />
                „Nie uwierzycie co włożyła na siebie TA kobieta”<br />
                „Merkel pije alkohol w trakcie wywiadu? Przyjrzyj się uważnie”<br />
                „Co za ciało! Słynna polska dziennikarka w Playboy’u”</h2>
                </p>
                <div className="navback">
                <Link title="Informacje dotyczące niechcianych wiadomości w internecie" to='/spam'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzedniego hasła</div></Link>
            </div>
            <div className="navnext">
                <Link title="Informacje dotyczące śmiesznych obrazków w internecie" to='/memy'><div className="direction">Przejdź do poprzedniego hasła <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>
        </div>
    );
}

export default ClickBaity;