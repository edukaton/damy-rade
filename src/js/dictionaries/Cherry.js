import React from 'react';
import '../../css/Dictionary.css';
import { Link } from "react-router-dom";

function Cherry(props) {
    return (
        <div className="dictionary">
            <div className="navback">
            <Link title="Informacje dotyczące fałszywych ekspertów w internecie" to='/falszywy-ekspert'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzedniego hasła</div></Link>
            </div>
            <div className="navnext">
            <Link title="Zadanie praktyczne o fałszywych informacjach i wyłudzeniach danych" to='/prawda-albo-falsz'><div className="direction">A teraz działaj <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>
            <h1 className="dictionary-title bold">Wybieranie wisienek</h1>
            <p className="dictionary-p">Autorzy “wisienek” wychodzą z założenia, że każdą teorię można udowodnić odpowiednio dobierając dane.
            <h2 className="bold center">Przykłady:</h2>
            <li>Chcesz udowodnić, że palenie nie skraca życia? Powołaj się na przykłady znanych osób, które palą a mimo to dożyły sędziwego wieku: Maria Czubaszek, Beata Tyszkiewicz, Jan Nowicki.</li>
            <li>W wyborach prezydenckich w Stanach Zjednoczonych w 2000 roku, kiedy George W. Bush ubiegał się o pierwszą elekcję, amerykańska opinia publiczna początkowo uważała jego niewyraźną mowę za przejaw niskiego poziomu inteligencji.  Sztab wyborczy wykorzystał tę słabość przekuwając ją w mocną stronę kandydata i przedstawiając go jako “swojego chłopa”.</li></p>
            <div className="navback">
            <Link title="Informacje dotyczące fałszywych ekspertów w internecie" to='/falszywy-ekspert'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzednie hasła</div></Link>
            </div>
            <div className="navnext">
            <Link title="Zadanie praktyczne o fałszywych informacjach i wyłudzeniach danych" to='/prawda-albo-falsz'><div className="direction">A teraz działaj <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>
        </div>
    );
}

export default Cherry;