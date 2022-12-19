import React from "react";

import Navbar from "./Componentes/NavBar";
import Footer from "./Componentes/Footer";
import Main from "./Componentes/Main";
import { BrowserRouter } from "react-router-dom";
import "./styles/estilos.css";
import { ComprasProvider } from "./Componentes/ComprasProvider";


const App = () => {

  return (
    <ComprasProvider>
      <BrowserRouter>
        <Navbar isHeader />
        <Main />
        <Footer />
      </BrowserRouter>
    </ComprasProvider>

  )
}

export default App;
