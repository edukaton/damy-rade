import React from 'react';
import '../../css/Dictionary.css';

function Manipulation(props) {
    return (
        <div className="dictionary">
            <h1 className="dictionary-title">Manipulacje językowe</h1>
            <p className="dictionary-p">
            Manipulacje językowe: używanie sformułowań powodujących ocenianie pozytywne lub negatywne przekazywanej informacji, np. skandaliczny, niewyobrażalny, karygodny, ale też wspaniały, cudowny. Często spotkasz się z nimi w tytułach artykułów lub paskach z informacjami w programach telewizyjnych. Zaliczamy tu także używanie sformułowań typu „My, naród polski”, „My, poznaniacy” oraz eksponowanie lub ograniczanie tytułów honorowych/naukowych.</p><br />
            <p><span className="bold">Przykłady manipulacji w paskach informacyjnych:<br /></span>
            <span className="italic">„Unijna procedura przeciwko Polsce to także próba zmuszenia nas do przyjęcia islamskich imigrantów”<br />
            "Kot prezesa twardo stawił czoła opozycji"<br />
            “Co za żenada. Norwegowie chcieli upokorzyć Stocha – odgryzł się z klasą”</span></p>
            <img src={require('./img/tvp.PNG')}/>
        </div>
    );
}

export default Manipulation;