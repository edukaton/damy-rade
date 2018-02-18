import React from 'react';
import '../css/Home.css';
import { Link } from "react-router-dom";

function Home(props) {
    return (
        <div className="home">
            <div className="header">
                <h1>Witaj w aplikacji WIEM-DZIAŁAM-PAMIĘTAM</h1>
            </div>

            <p className="bold">Aplikacja składa się z trzech części:</p><br />

            <p><span className="bold">WIEM</span> - to słownik podstawowych pojęć związanych z manipulacją w Internecie.
            Kliknij na WIEM i wybierz interesujące Cię pojęcie z listy.
Przeczytaj je, przeanalizuj przykłady.</p><br />

            <p><span className="bold">DZIAŁAM</span> - to zestaw ćwiczeń, które możesz wykonać, aby sprawdzić, czy zrozumiałeś wszystkie pojęcia ze słowniczka.
Kliknij na DZIAŁAM i wybierz z listy typ zadania. Dokładnie przeczytaj instrukcję do każdego z nich a następnie wykonaj. Powodzenia!</p><br />

            <p><span className="bold">PAMIĘTAM</span> - to Twój podręczny notatnik, w którym możesz zapisać wszystkie ważne dla Ciebie informacje i linki. </p>



            <div className="navnextt">
                <Link title="Informacje dotyczące fałszywych wiadomości w internecie" to='/falszywe-wiadomosci'><div className="direction">Rozpocznij kurs <i className="fa fa-caret-square-o-right"></i></div></Link>

            </div>
        </div>
    );
}

export default Home;