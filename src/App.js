import React from "react";
import ComprasProvider from "./Componentes/ComprasProvider";
import Navbar from "./Componentes/NavBar";
import Footer from "./Componentes/Footer";
import Main from "./Componentes/Main";
import { BrowserRouter } from "react-router-dom";
import "./styles/estilos.css";


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
