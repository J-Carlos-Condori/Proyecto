import React from "react";
import Typography from "@mui/material/Typography";
import ItemListContainer from "./ItemListContainer";
import { Route, Routes } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <Typography>
        <main className="mains">
            <Routes>
              <Route path="/" element={<h2>HOME</h2>}/>
              <Route path="/Listado" element={<ItemListContainer/>}/>

              <Route path="/Listado/:cat" element={<ItemListContainer/>}/>
              <Route path="/Listado/:cat" element={<ItemListContainer/>}/>
              <Route path="/Listado/:cat" element={<ItemListContainer/>}/>

              <Route path="/Mi_Cuenta" element={<h2>MI CUENTA</h2>}/>
              <Route path="/cart" element={<h2>CARRITO</h2>}/>

              <Route path="*" element={<h1>Error 404</h1>}/>
            </Routes>
        </main>
      </Typography>
    </>
  )
}
export default Main;