import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = () => {


    return (
        <div className="container">
            <div className="container-laPelicula">
                <div className="itemPortada">
                    <img src={portada} alt="portada"></img>
                </div>

                <div className="itemTexto">
                    <h2>{nombre}</h2>
                    <h5>{precio}$</h5>
                    <p>{general}</p>
                    <ItemCount />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;