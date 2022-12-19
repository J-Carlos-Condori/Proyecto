import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebase";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { cat } = useParams();


  useEffect(() => {



    if (cat) {

      const peliculasCollection = collection(db, "peliculas")
      const filtro = query(peliculasCollection, where("categoria", "==", cat))

      const consulta = getDocs(filtro)

      consulta
        .then(respuesta => {
          const peliculas = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }))
          setItems(peliculas)
        })



        .catch((error) => {
          console.log(error)
        })
    }
    else {

      const peliculasCollection = collection(db, "peliculas")

      const consulta = getDocs(peliculasCollection)

      consulta
        .then((respuesta) => {

          const peliculas = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }))
          setItems(peliculas)

        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [cat])

  return (
    <div>
      <h2>Productos</h2>
      {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
    </div>
  )
}

export default ItemListContainer;