import React from "react";
// import { useCarrito } from "./comprasProvider";
import ItemCount from "./ItemCount";

const ItemDetail = ({ lasPeliculas }) => {

    // const { agregarProducto } = useCarrito()
    // const [cantidad, setCantidad] = useState(1)
    // const [confirmado, setConfirmado] = useState(false)


    // const peticionContexto = useContext(useCarrito)

    // const handleOnadd = (cantidad) = {
    // }


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
                    <ItemCount />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;