import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from './firebase';
import { collection, getDoc, doc } from "firebase/firestore"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {


    const [lasPeliculas, setlasPeliculas] = useState(null);
    const { id } = useParams();


    useEffect(() => {

        const peliculasCollection = collection(db, "peliculas")
        const ref = doc(peliculasCollection, id)
        const consulta = getDoc(ref)

        consulta
            .then(respuesta => {
                setlasPeliculas(respuesta.data())
            })
            .catch(error => {
                console.log(error)
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