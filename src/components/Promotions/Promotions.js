import React from 'react'

import { Redirect } from 'react-router'
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";

import { selectIsAuthenticated } from "../../features/authenticateSlice";

import './style.scss'

const html = "https://res.cloudinary.com/uyscuty/image/upload/v1594845519/002_ts7ifk.png"
const java = "https://res.cloudinary.com/uyscuty/image/upload/v1594845519/003_dwurrn.png"
const pseudo = "https://res.cloudinary.com/uyscuty/image/upload/v1594845539/001_mvllwl.png"

function Promotions() {
   
    return (
        <div className="Promotions">
            <h1 className="Promotions__h1">Promociones!</h1>
            <div className="Promotions__all">
            <div className="Promotions__container grow">
            <img className="Promotions__image" src={pseudo} alt="Mejores regalos del verano"/>
            <Link to="/">Mejores regalos del verano</Link></div>
            <div className="Promotions__container grow">
            <img className="Promotions__image" src={html} alt="html"/>
            <Link to="/">Recomendados por nuestros usuarios</Link></div>
            <div className="Promotions__container grow">
            <img className="Promotions__image" src={java} alt="java"/>
            <Link to="/">Éxitos de cumpleaños</Link></div>
            </div>
        </div>
    )
}

export default Promotions
