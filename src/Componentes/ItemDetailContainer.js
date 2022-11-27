import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import { getPeliculaId } from './Utils';

const ItemDetailContainer = () => {

    const [lasPeliculas, setlasPeliculas] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        getPeliculaId(id)
            .then(respuesta => {
                setlasPeliculas(respuesta)
            })
    }, [id])

    if (!lasPeliculas) {
        return null
    }


    return (
        <div>
            {lasPeliculas.length === 0 ? <h1>Cargando...</h1> : <ItemDetail lasPeliculas={lasPeliculas} />}
        </div>
    )
}

export default ItemDetailContainer