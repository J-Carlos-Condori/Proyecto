import React from "react";
import CartWidget from "./CartWitget";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar=()=>{

  return (
    <>
      <Typography>
        <header className="header">
        <Link to="/">
            <h1>MOVZ</h1>
        </Link>
            
          <nav>
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
            <Link to="/Listado/Accion">
              <Button>
                <a>Accion</a>
              </Button>
            </Link>
            <Link to="/Listado/Animacion">
              <Button>
                <a>Animacion</a>
              </Button>
            </Link>
            <Link to="/Mi_Cuenta">
              <Button>
                <a>Mi Cuenta</a>
              </Button>
            </Link>
            
            <CartWidget />
          </nav>
        </header>
      </Typography>
    </>
  )
  
}

export default Navbar;