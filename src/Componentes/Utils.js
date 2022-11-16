import Peliculas from "../assets/Peliculas.json";

export const getProducts = () => {

    let pedidoPeliculas = new Promise((response) => {
        setTimeout(() => {
            response(Peliculas);
        }, 1500);
    })

    return pedidoPeliculas
}


export const getProductsByCategoryId = (id) => {

    let pedidoPeliculas = new Promise((response) => {
        setTimeout(() => {
            response(Peliculas.filter(item => item.categoria == id));
        }, 1500);
    })

    return pedidoPeliculas
}