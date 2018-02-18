import React from 'react';
import '../css/Home.css';
import { Link } from "react-router-dom";

function Home(props) {
    return (
        <div className="home">
        <div className="header">
            <h1>Strona główna</h1>
        </div>
           <span className="bold center"> 
            Witaj w naszej aplikacji! Jeżeli dotarłeś w to miejsce to znaczy, że potrzebujesz naszej pomocy.
            </span> Dzięki naszej aplikacji poznasz podstawowe zagrożenia związane z manipulacją w Internecie. Po lewej stronie w Menu [czyt. meni] znajdziesz przycisk WIEM,  a tam słowniczek najczęściej spotykanych technik manipulacyjnych. Po kliknięciu WIEM będziesz mógł wybrać poszczególne pojęcia. Przeczytaj je, zobacz przykłady. Słowniczek możesz sobie wydrukować!
            Gdy zapoznasz się ze wszystkimi pojęciami - wykonaj ćwiczenia. To przycisk DZIAŁAM w Menu. W każdym ćwiczeniu, zanim je wykonasz,  przeczytaj dokładnie instrukcję.  
            Dział PAMIĘTAM, potraktuj jako notes, w którym możesz zapisać wszystkie ważne informacje i linki. 
            Wykonałeś wszystkie ćwiczenia? Brawo!
            
         
            <div className="navnextt">
            <Link title="Informacje dotyczące fałszywych wiadomości w internecie" to='/falszywe-wiadomosci'><div className="direction">Rozpocznij kurs <i className="fa fa-caret-square-o-right"></i></div></Link>
            
        </div>
        </div>
    );
}

export default Home;