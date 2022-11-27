import React from 'react'
import { useState } from "react";

const ItemCount = () => {

  const [count, setCount] = useState(1);

  const handleSumar = () => {
    setCount(count + 1);
  }

  const handleRestar = () => {
    if (count === 1) {
      setCount(count)
    } else {
      setCount(count - 1);
    }
  }



  return (
    <div className='botonera'>
      <div className="botonera__cantidades">
        <button className='boton' onClick={handleRestar}>-</button>
        <h4>{count}</h4>
        <button className='boton' onClick={handleSumar}>+</button>
      </div>
      <div className='botonera__compra'>
        <button className='boton'>CONFIMAR COMPRA</button>
      </div>
    </div>
  )
}
export default ItemCount;
