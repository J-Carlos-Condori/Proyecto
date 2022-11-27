import Peliculas from "../assets/Peliculas.json";

export let lasPeliculas = Peliculas;


const generatePromise = (operation, time = 1000) => {
    return new Promise((respuesta, error) => {
        respuesta(operation)
    }, time)
}




export const getProducts = () => {

}
generatePromise(lasPeliculas)


export const getProductsByCategoryId = (categoria) => {

    generatePromise(lasPeliculas.filter(item => item.categoria === categoria));

}

export const getProductById = (id) => {

    generatePromise(lasPeliculas.find(item => item.id === id))
}