import ItemCount from "./ItemCount"
import Peliculas from "../assets/Peliculas.json";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
    const { id } = useParams();
    const laPelicula = Peliculas[id - 1];


    console.log(id);
    console.log(laPelicula);

    return (
        <div className="container">
            <div className="container-laPelicula">
                <div className="itemPortada">
                    <img src={laPelicula.portada} alt="portada"></img>

                </div>

                <div className="itemTexto">
                    <h2>{laPelicula.nombre}</h2>
                    <h5>{laPelicula.precio}$</h5>
                    <p>{laPelicula.general}</p>
                    <ItemCount />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail