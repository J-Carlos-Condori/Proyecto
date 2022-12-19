import React, { useContext, useState } from "react";
import { DatosContexto } from "./ComprasProvider";
import ItemCount from "./ItemCount";


const ItemDetail = ({ lasPeliculas }) => {
    const { agregar } = useContext(DatosContexto)

    const [cantidad, setCantidad] = useState(1)
    const [confirmado, setConfirmado] = useState(false)


    const handleOnAdd = (cantidad) => {

        console.log("se agregaron " + cantidad + " productos")
        console.log(lasPeliculas)
        setCantidad(cantidad)
        setConfirmado(true)

    }

    const handleClick = () => {
        agregar(lasPeliculas, cantidad)
    }


    return (
        <div className="container">
            <div className="container-laPelicula">
                <div className="itemPortada">
                    <img src={lasPeliculas.portada} alt="portada"></img>
                    <h5>STOCK : {lasPeliculas.stock}</h5>
                </div>

                <div className="itemTexto">
                    <h2>{lasPeliculas.nombre}</h2>
                    <h5>{lasPeliculas.precio}$</h5>
                    <p>{lasPeliculas.general}</p>
                    <ItemCount init={cantidad} handleOnAdd={handleOnAdd} />

                    {confirmado && <button className='boton' onClick={handleClick}>Finalizar Compra</button>}

                </div>
            </div>
        </div>
    )
}

export default ItemDetail;