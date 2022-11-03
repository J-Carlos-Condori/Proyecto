import React from "react";
import Navbar from "./Componentes/NavBar";
import Footer from "./Componentes/Footer";
import Main from "./Componentes/Main";
import ItemListContainer from "./Componentes/ItemListContainer";
import { BrowserRouter } from "react-router-dom";

import "./styles/estilos.css";

const App=()=>{
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
