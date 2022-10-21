import React from "react";
import Navbar from "./Componentes/NavBar";
import Footer from "./Componentes/Footer";
import Main from "./Componentes/Main";
import ItemListContainer from "./Componentes/ItemListContainer";

import "./styles/estilos.css";

const App=()=>{
  return (
    <>
        <Navbar />
        <ItemListContainer greeting={{titulo:"MOVZ",cantidad:100000}}/>
        <Main />
        <Footer />
    </>
  );
}

export default App;
