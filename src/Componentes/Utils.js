import Peliculas from "../assets/Peliculas.json";

export let lasPeliculas = Peliculas;

export const getProducts = () => {

    let pedidoPeliculas = new Promise((response) => {
        setTimeout(() => {
            response(lasPeliculas);
        }, 500);
    })

    return pedidoPeliculas
}


export const getProductsByCategory = (categoria) => {

    let pedidoPeliculas = new Promise((response) => {
        setTimeout(() => {
            response(lasPeliculas.filter(item => item.categoria == categoria));
        }, 500);
    })

    return pedidoPeliculas
}


export const getPeliculaId = (id) => {

    let pedidoPeliculas = new Promise((response) => {
        setTimeout(() => {
            response(lasPeliculas.find(item => item.id == id));
        }, 200);
    })

    return pedidoPeliculas
}