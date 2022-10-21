import React from "react";
import Typography from "@mui/material/Typography";


const ItemListContainer=({greeting})=>{
  return(
    <>
    <Typography>
      <div className="itemlist">
        <h2>Somos {greeting.titulo}</h2>
        <p>
            En {greeting.titulo} encontraras las mejores peliculas
        </p>
        <p>
            Contamos con mas de {greeting.cantidad} mil titulos para que disfrutes  
        </p>
      </div>
    </Typography>
    </>
  )

}

export default ItemListContainer;