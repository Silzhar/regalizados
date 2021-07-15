import React from 'react'

import { Redirect } from 'react-router'
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";


import './style.scss'


function Movilidad() {
   
    return (
        <div className="deportes">
            <h1 className="Promotions__h1">Movilidad !</h1>

            <div className="Promotions__all">
            <div className="Promotions__container grow">
                <Link to="/">Bicicleta</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Skate</Link>
            </div>
            </div>
            
        </div>
    )
}

export default Movilidad
