import React from 'react';
import '../../css/Dictionary.css';

function Cherry(props) {
    return (
        <div className="dictionary">
            <h1 className="dictionary-title">Wybieranie wisienek</h1>
            <p className="dictionary-p">Autorzy “wisienek” wychodzą z założenia, że każdą teorię można udowodnić odpowiednio dobierając dane.
            <h2 className="bold center">Przykłady:</h2>
            <li>Chcesz udowodnić, że palenie nie skraca życia? Powołaj się na przykłady znanych osób, które palą a mimo to dożyły sędziwego wieku: Maria Czubaszek, Beata Tyszkiewicz, Jan Nowicki.</li>
            <li>W wyborach prezydenckich w Stanach Zjednoczonych w 2000 roku, kiedy George W. Bush ubiegał się o pierwszą elekcję, amerykańska opinia publiczna początkowo uważała jego niewyraźną mowę za przejaw niskiego poziomu inteligencji.  Sztab wyborczy wykorzystał tę słabość przekuwając ją w mocną stronę kandydata i przedstawiając go jako “swojego chłopa”.</li>
</p>
        </div>
    );
}

export default Cherry;