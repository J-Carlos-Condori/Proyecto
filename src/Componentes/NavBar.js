import React from "react";
import CartWidget from "./CartWitget";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (

    <header className="header">
      <Link to="/">
        <a className="brand-logo"><h3>MOVZ</h3></a>
      </Link>

      <div className="Listado right hide-on-med-and-down">
        <Link to="/Listado">
          <Button>
            <a>Listado</a>
          </Button>
        </Link>
        <Link to="/Listado/Estrenos">
          <Button>
            <a>Estrenos</a>
          </Button>
        </Link>
        <Link to="/Listado/Comedia">
          <Button>
            <a>Comedia</a>
          </Button>
        </Link>
        <Link to="/Listado/Accion">
          <Button>
            <a>Accion</a>
          </Button>
        </Link>
        <Link to="/Listado/Terror">
          <Button>
            <a>Terror</a>
          </Button>
        </Link>
        <Link to="/Mi_Cuenta">
          <Button>
            <a>Mi Cuenta</a>
          </Button>
        </Link>

        <Link to="/Cart">
          <a>
            <CartWidget />
          </a>
        </Link>
      </div>
    </header>
  )

}

export default Navbar;