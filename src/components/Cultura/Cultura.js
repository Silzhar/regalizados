import React from 'react'

import { Redirect } from 'react-router'
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";


import './style.scss'


function Cultura() {
   
    return (
        <div className="deportes">
            <h1 className="Promotions__h1">Cultura !</h1>

            <div className="Promotions__all">
            <div className="Promotions__container grow">
                <Link to="/">Libros</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Musica</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Comics</Link>
            </div>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Arte</Link>
            </div>
        </div>
    )
}

export default Cultura
