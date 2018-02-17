import React from 'react';
import '../../css/Dictionary.css';

function Framing(props) {
    return (
        <div className="dictionary">
            <h1 className="dictionary-title">Framing (efekt ramowania, sformułowania)</h1>
            <p className="dictionary-p">Framing (efekt ramowania, sformułowania) -  to sposób prezentacji wiadomości, podkreślający pożądane kwestie, a pomijający pozostałe.</p>
            Narzędzia framingu:
            <li>odpowiedni wybór komentatorów</li>
            <li>kolejność prezentacji</li>
            <li>opis pod zdjęciem</li>
            <li>wybrane cytaty</li>
        </div>
    );
}

export default Framing;