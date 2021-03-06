import React from 'react';
import '../../css/Dictionary.css';
import { Link } from "react-router-dom";

function FakeNews(props) {
    return (
        <div className="dictionary">
            <div className="navback">
                <Link title="Strona główna" to='/'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do strony głównej</div></Link>
            </div>
            <div className="navnext">
                <Link title="Informacje dotyczące wyłudzeń danych w internecie" to='/wyludzanie-danych'><div className="direction">Przejdź do następnego hasła <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>
            <h1 className="dictionary-title bold">Fake news | (fałszywe wiadomości) | [fejk nius]</h1>
            <p className="dictionary-p">
            
            <span className="bold">Fake news | (fałszywe wiadomości) | [fejk nius] </span>
                 forma przekazywania informacji, która opiera się na celowej dezinformacji.Za pomocą mediów elektronicznych czy serwisów społecznościowych mogą być rozprzestrzeniane szybciej i w niespotykanej dotąd ilości. Fake newsy powstają, aby wprowadzić Cię w błąd, najczęściej w celu uzyskania finansowych lub politycznych korzyści.
            <h2 className="center bold">PRZYKŁADY:</h2>
            <p><span className="bold">Fake news: Papież Franciszek poparł Donalda Trumpa przed wyborami w USA</span><br />
            <span className="italic">A jak było naprawdę?</span><br /> Papież Franciszek przed wyborami prezydenckimi w USA powiedział jedynie, że "podczas kampanii wyborczej nigdy nic nie mówi". - Lud jest suwerenem, a tylko powiem: trzeba dobrze badać propozycje, modlić się i wybierać w sumieniu.</p>  
           
            <p><span className="bold">Fake news: Maciej Musiał nie żyje</span><br/><span className="italic">A jak było naprawdę?</span><br /> link do artykułu w fałszywym serwisie informacyjnym, który był 	udostępniany przez najpierw fałszywe, a potem prawdziwe profile społecznościowe (wirus, patrz: wyłudzanie danych).</p>
            
            <p><span className="bold">Fake news: Wojtek z Reserved</span><br/><span className="italic">A jak było naprawdę?</span><br /> Ponad 2 300 000 osób obejrzało na Internecie filmik, 	w którym piękna Amerykanka szuka Wojtka z Polski, którego poznała na jednym z koncertów. Prosi  o pomoc w odnalezieniu 	chłopaka. W dzień, w którym pojawia się nagranie, tysiące internautów na prośbę bohaterki historii udostępnia filmik, a po kilku dniach okazuje się, że jest to akcja reklamowa firmy Reserved.</p>
            <span className="bold">CHCESZ WIEDZIEĆ WIĘCEJ?:</span>
            <li><a href="https://pl.wikipedia.org/wiki/Plik:How_to_Spot_Fake_News.pdf" target="blank">Jak zatrzymać fake news</a></li>
            <li><a href="https://biznes.newseria.pl/files/raport-fake-news-newseria.pdf" target="blank">Jak kłamstwo rządzi światem</a></li>

            <h2 className="dictionary-subtitle"></h2>
            
            </p>
            <div className="navback">
                <Link title="Strona główna" to='/'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do strony głównej</div></Link>
            </div>
            <div className="navnext">
                <Link title="Informacje dotyczące wyłudzeń danych w internecie" to='/wyludzanie-danych'><div className="direction">Przejdź do następnego hasła <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>
        </div>
    );
}

export default FakeNews;