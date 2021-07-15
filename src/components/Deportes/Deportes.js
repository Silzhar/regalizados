import React from 'react'

import { Redirect } from 'react-router'
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";


import './style.scss'


function Deportes() {
   
    return (
        <div className="deportes">
            <h1 className="Promotions__h1">Deportes !</h1>

            <div className="Promotions__all">
            <div className="Promotions__container grow">
                <Link to="/">Fútbol</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Baloncesto</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Rugby</Link>
            </div>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Balonmano</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Artes Marciales</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Escalada</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Bicicleta</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Skate</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Tenis</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Padel</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Natación</Link>
            </div>
        </div>
    )
}

export default Deportes
