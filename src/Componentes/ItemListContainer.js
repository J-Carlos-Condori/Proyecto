import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Peliculas from "../assets/Peliculas.json";
import ItemList from "./ItemList";


const ItemListContainer=()=>{

  const [items,setItems]=useState([])
  const params=useParams()
  console.log(params)

  useEffect(()=>{

    let peticion = new Promise((res)=>{
      setTimeout(()=>{
        res(Peliculas);
      },1500)
    })
  
    peticion
    .then((respuesta)=>{
      setItems(respuesta);        
    })
  
    .catch((error)=>{
      console.log(error);      
    })
  },[])

  return(
    <>
    <h2>LISTADO</h2>
      <div className="itemlist">
        {items.length==0?<h3>Cargando...</h3>:<ItemList items={items}/>}
      </div>
    </>
  )
}

export default ItemListContainer;