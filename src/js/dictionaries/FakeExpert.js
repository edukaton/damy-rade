import React from 'react';
import '../../css/Dictionary.css';

function FakeExpert(props) {
    return (
        /*
        -<Link title="Informacje dotyczące manipulowania językiem w internecie" to='/manipulacje-jezykowe'>Manipulacje językowe</Link>
        +<Link title="Informacje dotyczące subiektywnych dowodów w internecie" to='/wybieranie-wisienek'>Wybieranie wisienek</Link>
        */
        <div className="dictionary">
            <h1 className="dictionary-title">Fałszywy ekspert</h1>
            <p className="dictionary-p"><span className="bold">Fałszywy ekspert</span>Wypowiedź osoby, która podaje się za eksperta lub powołuje na rekomendacje instytucji, która tak naprawdę nie istnieje  Z pozoru informacje mogą wydać Ci się wiarygodne, ale warto  sprawdzić  czy taki specjalista i  taka instytucja  istnieje i jaką ma renomę.  Nie należy wierzyć w pojedyncze badania. Szukaj dodatkowych analiz niezależnych podmiotów o ugruntowanej międzynarodowej pozycji.<br/>
            Fałszywy ekspert: pedagog szkolny reklamuje suplement diety</p>
            <img src={require('./img/aflo.PNG')}/><br/>
            <a href="http://progressment.pl/moc-autorytetu/">Obejrzyj:</a>

            <h2 className="bold center">Przykład:</h2>
            <p>Lektor w programie telewizyjnym: Eksperci twierdzą, że krytyka „Korony Królów” jest przesadzona. Powołano się na opinię prof. Przemysława Waingertnera, historyka z  Uniwersytetu ŁódzkiegoCzy prof. Waingertner jest ekspertem z tego okresu historycznego? Zajmuje się  myślą polityczną dwudziestolecia międzywojennego, nie jest więc w ogóle jasne, dlaczego TVP akurat jego zapytała o serial pokazujący czasy o 600 lat wcześniejsze. Ważne jest, że popiera swoim stopniem naukowym dr hab. tezę materiału.</p>

        </div>
    );
}

export default FakeExpert;