import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuMobile from "../MenuMobile"

import "./style.scss";
const logo = ""

function Navbar() {
  return (
    <div className="Navbar">
      <img
        className="Navbar__image"
        alt="logo aquí"
        src={logo}
      />
      <MenuMobile/>
      <div className="Navbar__linkcontainer">
          <div className="Navbar__link">
            <Link to="/">Categorias</Link>
          </div>
          <React.Fragment>
            <div className="Navbar__link">
              <Link to="/promotions">Promociones</Link>
            </div>
            <div className="Navbar__link">
              <Link to="/user">Mi Area</Link>
            </div>
          </React.Fragment>
      </div>
    </div>
  );
}

export default Navbar;
