import React from 'react';
import '../../css/Dictionary.css';
import { Link } from "react-router-dom";

function Manipulation(props) {
    return (
        /*
        -<Link title="Informacje dotyczące pomijania informacji w internecie" to='/framing'>Framing</Link>
        +<Link title="Informacje dotyczące fałszywych ekspertów w internecie" to='/falszywy-ekspert'>Fałszywy ekspert</Link>
        */
        <div className="dictionary">
            <div className="navback">
            <Link title="Informacje dotyczące pomijania informacji w internecie" to='/framing'><div className="direction"><i class="fas fa-caret-square-left"></i> Wróć do Framing</div></Link>
            </div>
            <div className="navnext">
            <Link title="Informacje dotyczące fałszywych ekspertów w internecie" to='/falszywy-ekspert'><div className="direction">Przejdź do Fałszywy ekspert <i class="fas fa-caret-square-right"></i></div></Link>
            </div>
            <h1 className="dictionary-title">Manipulacje językowe</h1>
            <p className="dictionary-p">
            Manipulacje językowe: używanie sformułowań powodujących ocenianie pozytywne lub negatywne przekazywanej informacji, np. skandaliczny, niewyobrażalny, karygodny, ale też wspaniały, cudowny. Często spotkasz się z nimi w tytułach artykułów lub paskach z informacjami w programach telewizyjnych. Zaliczamy tu także używanie sformułowań typu „My, naród polski”, „My, poznaniacy” oraz eksponowanie lub ograniczanie tytułów honorowych/naukowych.</p><br />
            <p><span className="bold">Przykłady manipulacji w paskach informacyjnych:<br /></span>
            <span className="italic">„Unijna procedura przeciwko Polsce to także próba zmuszenia nas do przyjęcia islamskich imigrantów”<br />
            "Kot prezesa twardo stawił czoła opozycji"<br />
            “Co za żenada. Norwegowie chcieli upokorzyć Stocha – odgryzł się z klasą”</span></p>
            <img src={require('./img/tvp.PNG')}/>
            <div className="navback">
            <Link title="Informacje dotyczące pomijania informacji w internecie" to='/framing'><div className="direction"><i class="fas fa-caret-square-left"></i> Wróć do Framing</div></Link>
            </div>
            <div className="navnext">
            <Link title="Informacje dotyczące fałszywych ekspertów w internecie" to='/falszywy-ekspert'><div className="direction">Przejdź do Fałszywy ekspert <i class="fas fa-caret-square-right"></i></div></Link>
            </div>
        </div>
    );
}

export default Manipulation;