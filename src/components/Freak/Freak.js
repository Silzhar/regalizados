import React from 'react'

import { Redirect } from 'react-router'
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";


import './style.scss'


function Freak() {
   
    return (
        <div className="deportes">
            <h1 className="Promotions__h1">Freak !</h1>

            <div className="Promotions__all">
            <div className="Promotions__container grow">
                <Link to="/">Comics</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Anime</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Merchandising</Link>
            </div>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Películas y Series</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Populares</Link>
            </div>
            <div className="Promotions__container grow">
                <Link to="/">Juegos de Mesa</Link>
            </div>
        </div>
    )
}

export default Freak
