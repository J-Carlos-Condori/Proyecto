import React from "react";
import ItemListContainer from "./ItemListContainer";
import { Route, Routes } from "react-router-dom";
import Cuenta from "./Cuenta";
import ItemDetailContainer from "./ItemDetailContainer";
import CarritoContainer from "./CarritoContainer";

export const Main = () => {
  return (
    <>
      <main className="mains grey darken-3">
        <Routes>

          <Route path="/" element={<h2>HOME</h2>} />
          <Route path="/Listado" element={<ItemListContainer />} />

          <Route path="/Listado/:cat" element={<ItemListContainer />} />
          <Route path="/Listado/:cat" element={<ItemListContainer />} />
          <Route path="/Listado/:cat" element={<ItemListContainer />} />
          <Route path="/Listado/:cat" element={<ItemListContainer />} />


          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="/Mi_Cuenta" element={<Cuenta />} />
          <Route path="/Cart" element={<CarritoContainer />} />

          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </main>
    </>
  )
}
export default Main;