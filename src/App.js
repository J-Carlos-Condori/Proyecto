import React, { createContext } from "react";
import Navbar from "./Componentes/NavBar";
import Footer from "./Componentes/Footer";
import Main from "./Componentes/Main";
import { BrowserRouter } from "react-router-dom";

import "./styles/estilos.css";


export const contexto = createContext();
const { Provider } = contexto;

const App = () => {

  return (
    <Provider>
      <BrowserRouter>
        <Navbar isHeader />
        <Main />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
