import React from 'react'
import { Link } from 'react-router-dom';
import './style.scss'


const myH1 = "Regalizados"
const mySubtitle = "Regalos personalizados"

function Homepage() {
    return (
        <div className="Homepage">
            <h1 className="Homepage__h1">{myH1}</h1>
    <p className="Homepage__subtitle">{mySubtitle}</p>
            <div className="Homepage__link"><Link to="/deportes">Deportes</Link></div>
            <div className="Homepage__link"><Link to="/freak">Freak</Link></div>
            <div className="Homepage__link"><Link to="/tecnologia">Tecnología</Link></div>
            <div className="Homepage__link"><Link to="/cultura">Cultura</Link></div>
            <div className="Homepage__link"><Link to="/experiencias">Experiencias</Link></div>
            <div className="Homepage__link"><Link to="/infaltil">Infantil</Link></div>
            <div className="Homepage__link"><Link to="/hogar">Hogar</Link></div>
            <div className="Homepage__link"><Link to="/movilidad">Movilidad</Link></div>
            <div className="Homepage__link"><Link to="/fashion">Fashion</Link></div>
            <div className="Homepage__link"><Link to="/belleza">belleza</Link></div>
        </div>
    )
}

export default Homepage
