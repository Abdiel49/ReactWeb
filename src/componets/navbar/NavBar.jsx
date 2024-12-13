import React from "react";

import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const brand = "https://ascensus-mdb-uikit-tutorial.mdbgo.io/img/logo.png";

  return (
    <header className="header">
      {/* logo de la marca */}
      <NavLink className="logo-container" to="/">
        <img src={brand} alt="logo" />
      </NavLink>

      {/* links de navegación */}
      <nav>
        <ul className="nav-container">
          <li>
            <NavLink to="/products">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/pedido">Carrito</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
