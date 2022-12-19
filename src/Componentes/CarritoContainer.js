import React, { useContext } from 'react';
import CarritoItems from './CarritoItems';
import { DatosContexto } from './ComprasProvider';




const CarritoContainer = () => {
    const valorcontexto = useContext(DatosContexto)

    console.log(valorcontexto.peliculasagregadas)

    const peliculas = valorcontexto.peliculasagregadas


    return (
        <>

            <CarritoItems peliculas={peliculas} />

        </>
    )
}
export default CarritoContainer;