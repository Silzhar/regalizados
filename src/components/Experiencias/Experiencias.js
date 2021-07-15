import React from 'react'

import { Redirect } from 'react-router'
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";


import './style.scss'


function Experiencias() {
   
    return (
        <div className="deportes">
            <h1 className="Promotions__h1">Experiencias !</h1>

            <div className="Promotions__all">
            <div className="Promotions__container grow">
                <Link to="/">Salud y Bienestar</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Teatro</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Aventura</Link>
            </div>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Eventos</Link>
            </div>
        </div>
    )
}

export default Experiencias
