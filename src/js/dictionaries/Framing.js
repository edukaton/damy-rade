import React from 'react';
import '../../css/Dictionary.css';
import { Link } from "react-router-dom";

function Framing(props) {
    return (
        <div className="dictionary">
            <div className="navback">
                <Link title="Informacje dotyczące śmiesznych obrazków w internecie" to='/memy'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do Memy</div></Link>
            </div>
                <div className="navnext">
                    <Link title="Informacje dotyczące manipulowania językiem w internecie" to='/manipulacje-jezykowe'><div className="direction">Przejdź do Manipulacje językowe <i className="fa fa-caret-square-o-right"></i></div></Link>
        </div>
            <h1 className="dictionary-title">Framing (efekt ramowania, sformułowania)</h1>
            <p className="dictionary-p">Framing (efekt ramowania, sformułowania) -  to sposób prezentacji wiadomości, podkreślający pożądane kwestie, a pomijający pozostałe.</p>
            Narzędzia framingu:
            <li>odpowiedni wybór komentatorów</li>
            <li>kolejność prezentacji</li>
            <li>opis pod zdjęciem</li>
            <li>wybrane cytaty</li>
            <div className="navback">
                <Link title="Informacje dotyczące śmiesznych obrazków w internecie" to='/memy'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do Memy</div></Link>
            </div>
                <div className="navnext">
                    <Link title="Informacje dotyczące manipulowania językiem w internecie" to='/manipulacje-jezykowe'><div className="direction">Przejdź do Manipulacje językowe <i className="fa fa-caret-square-o-right"></i></div></Link>
        </div>
        </div>
    );
}

export default Framing;