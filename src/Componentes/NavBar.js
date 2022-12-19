import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWitget";
import { lasPeliculas } from "./Utils";

const Navbar = ({ isHeader }) => {

  const categorias = lasPeliculas.map((item) => {
    return (
      <Link to={`/Listado/${item.categoria}`} key={item.categoria} className="link" activeClassName="active">

        {item.categoria}

      </Link>
    )
  })

  return (
    <nav className="nav-wrapper">
      {!isHeader && categorias}
      <div className="container">
        <Link to="/" className="brand-logo">
          MOVZ
        </Link>

        <ul id="nav-mobile" className="Listados right hide-on-med-and-down">

          <li>
            <Link to="/Listado">
              Listado
            </Link>
          </li>

          <li>
            <Link to="/Listado/Estrenos">
              Estrenos
            </Link>
          </li>

          <li>
            <Link to="/Listado/Comedia">
              Comedia
            </Link>
          </li>

          <li>
            <Link to="/Listado/Accion">
              Accion
            </Link>
          </li>

          <li>
            <Link to="/Listado/Terror">
              Terror
            </Link>
          </li>

          <li>
            <Link to="/Mi_Cuenta">
              Mi Cuenta
            </Link>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  )

}

export default Navbar;