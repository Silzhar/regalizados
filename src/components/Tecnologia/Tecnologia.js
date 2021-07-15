import React from 'react'

import { Redirect } from 'react-router'
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";


import './style.scss'


function Tecnologia() {
   
    return (
        <div className="deportes">
            <h1 className="Promotions__h1">Tecnología !</h1>

            <div className="Promotions__all">
            <div className="Promotions__container grow">
                <Link to="/">Móvil</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Portátil</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Tablet</Link>
            </div>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">E-Books</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Audio</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Fotografia</Link>
            </div>
        </div>
    )
}

export default Tecnologia
