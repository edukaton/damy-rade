import React from 'react';
import '../../css/Dictionary.css';
import { Link } from "react-router-dom";

function Memy(props) {
    return (
        
        <div className="dictionary">
            <div className="navback">
                <Link title="Informacje dotyczące krzykliwych nagłówków w internecie" to='/click-baity'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzedniego hasła</div></Link>
            </div>
            <div className="navnext">
                <Link title="Informacje dotyczące pomijania informacji w internecie" to='/framing'><div className="direction">Przejdź do następnego hasła <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>
            <h1 className="dictionary-title bold">Memy</h1>
            <p className="dictionary-p"><span className="bold">Memy</span> obrazki o charakterze humorystycznym, w których elementy graficzne współwystępują z elementami tekstowymi. - obrazki o charakterze humorystycznym, w których elementy graficzne współwystępują z elementami tekstowymi.
            <img src={require('./img/mem1.jpg')}/>
            <img src={require('./img/mem2.jpg')}/>
            <img src={require('./img/mem3.jpg')}/>
            </p>
            <div className="navback">
                <Link title="Informacje dotyczące krzykliwych nagłówków w internecie" to='/click-baity'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzedniego hasła</div></Link>
            </div>
            <div className="navnext">
                <Link title="Informacje dotyczące pomijania informacji w internecie" to='/framing'><div className="direction">Przejdź do następnego hasła <i className="fa fa-caret-square-o-right"></i></div></Link>
            </div>
        </div>
    );
}

export default Memy;