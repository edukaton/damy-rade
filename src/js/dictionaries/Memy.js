import React from 'react';
import '../../css/Dictionary.css';

function Memy(props) {
    return (
        /*
        -<Link title="Informacje dotyczące krzykliwych nagłówków w internecie" to='/click-baity'>Click baity</Link>
        +<Link title="Informacje dotyczące pomijania informacji w internecie" to='/framing'>Framing</Link>
        */
        <div className="dictionary">
            <h1 className="dictionary-title">Memy</h1>
            <p className="dictionary-p">Memy - obrazki o charakterze humorystycznym, w których elementy graficzne współwystępują z elementami tekstowymi. - obrazki o charakterze humorystycznym, w których elementy graficzne współwystępują z elementami tekstowymi.</p>
            <img src={require('./img/mem1.jpg')}/>
            <img src={require('./img/mem2.jpg')}/>
            <img src={require('./img/mem3.jpg')}/>
        </div>
    );
}

export default Memy;