import React from 'react'

import { Redirect } from 'react-router'
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";


import './style.scss'


function Fashion() {
   
    return (
        <div className="deportes">
            <h1 className="Promotions__h1">Fashion !</h1>

            <div className="Promotions__all">
            <div className="Promotions__container grow">
                <Link to="/">Mujer</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Hombre</Link>
            </div>
            </div>
            
        </div>
    )
}

export default Fashion
