import Peliculas from "../assets/Peliculas.json";

export const getProducts = () => {

    let pedidoPeliculas = new Promise((response) => {
        setTimeout(() => {
            response(Peliculas);
        },1500);
    })

    return pedidoPeliculas
}