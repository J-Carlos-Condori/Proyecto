import React from 'react'
import { useState } from "react";

const ItemCount = () => {

  const [count, setCount] = useState(1);

  const handleSumar = () => setCount(count + 1);

  const handleRestar = () => count === 1 ? setCount(count) : setCount(count - 1);

  const handleAgregarCarrito = () => {

    console.log("hola que hace")
  }

  return (
    <div className="botonera">
      <div className="botonera__cantidades">
        <button className='boton' onClick={handleRestar}>-</button>
        <h4>{count}</h4>
        <button className='boton' onClick={handleSumar}>+</button>
      </div>
      <div className="botonera__agregar">
        <button className='boton' onClick={handleAgregarCarrito}>AGREGAR AL CARRITO</button>
      </div>
    </div>
  )
}
export default ItemCount;
