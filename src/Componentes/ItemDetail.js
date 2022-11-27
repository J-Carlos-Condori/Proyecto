import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ lasPeliculas }) => {


    return (
        <div className="container">
            <div className="container-laPelicula">
                <div className="itemPortada">
                    <img src={lasPeliculas.portada} alt="portada"></img>
                </div>

                <div className="itemTexto">
                    <h2>{lasPeliculas.nombre}</h2>



                    <h5>{lasPeliculas.precio}$</h5>
                    <p>{lasPeliculas.general}</p>
                    <ItemCount />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;