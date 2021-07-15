import React from 'react'

import { Redirect } from 'react-router'
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";


import './style.scss'


function Hogar() {
   
    return (
        <div className="deportes">
            <h1 className="Promotions__h1">Hogar !</h1>

            <div className="Promotions__all">
            <div className="Promotions__container grow">
                <Link to="/">Muebles</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Jardin</Link>
            </div>
            </div>
            
        </div>
    )
}

export default Hogar
