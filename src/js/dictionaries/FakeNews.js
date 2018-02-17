import React from 'react';
import '../../css/Dictionary.css';

function FakeNews(props) {
    return (
        <div className="dictionary">
            <h1 className="dictionary-title">FAKE NEWS (fałszywe wiadomości)</h1>
            <p className="dictionary-p">FAKE NEWS (fałszywe wiadomości):
forma przekazywania informacji, która opiera się na celowej dezinformacji .Za pomocą mediów elektronicznych czy serwisów społecznościowych mogą być rozprzestrzeniane szybciej i w niespotykanej dotąd ilości. Fake newsy powstają, aby wprowadzić Cię w błąd, najczęściej w celu uzyskania finansowych lub politycznych korzyści.
</p>
            <h2 className="dictionary-subtitle"></h2>
            <img className="dictionary-image" />
        </div>
    );
}

export default FakeNews;