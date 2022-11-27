import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategoryId } from "./Utils";
import ItemList from "./ItemList";


const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const { cat } = useParams();


  useEffect(() => {
    if (cat) {
      console.log("EFECTO con categoria")
      getProductsByCategoryId(cat)
        .then(respuesta => {
          console.log(respuesta, cat)
          setItems(respuesta)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {

      getProducts()
        .then((respuesta) => {
          console.log(respuesta)
          setItems(respuesta)
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