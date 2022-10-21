import React from "react";
import CartWidget from "./CartWitget";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Navbar=()=>{

  return (
    <>
      <Typography>
        <header className="header">
        <a href="_blank">
          <h1>MOVZ</h1>
        </a>
            
          <nav>
            <Button>
              <a href="_blank">Estrenos</a>
            </Button>
            <Button>
              <a href="_blank">Accion</a>
            </Button>
            <Button>
              <a href="_blank">Animacion</a>
            </Button>
            <Button>
              <a href="_blank">Mi Cuenta</a>
            </Button>
            <CartWidget />
          </nav>
        </header>
      </Typography>
    </>
  )
  
}

export default Navbar;