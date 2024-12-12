import React from "react";

import "./NavBar.css";

const NavBar = () => {
  const brand = "https://ascensus-mdb-uikit-tutorial.mdbgo.io/img/logo.png";

  return (
    <header className="header">
      {/* logo de la marca */}
      <div className="logo-container">
        <img src={brand} alt="logo" />
      </div>

      {/* links de navegación */}
      <nav>
        <ul className="nav-container">
          <li>
            <a href="/">Productos</a>
          </li>
          <li>
            <a href="/">Carrito</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
