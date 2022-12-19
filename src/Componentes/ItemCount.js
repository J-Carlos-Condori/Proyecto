import React, { useState } from 'react'

const ItemCount = ({ init, handleOnAdd }) => {



  const [count, setCount] = useState(init);

  const handleSumar = () => {
    console.log("estoy sumando")
    setCount(count + 1);
  }
  const handleRestar = () => {
    console.log("estoy restando")
    count == 1 ? setCount(count) : setCount(count - 1);
  }

  const handleAgregar = () => {

    handleOnAdd(count)

  }


  return (
    <div className="botonera">
      <div className="botonera__cantidades">
        <button className='boton' onClick={handleRestar}>-</button>
        <h4>{count}</h4>
        <button className='boton' onClick={handleSumar}>+</button>
      </div>
      <div className="botonera__agregar">
        <button className='boton' onClick={handleAgregar}>agregar</button>
      </div>
    </div>
  )
}
export default ItemCount;
