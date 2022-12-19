import React, { useContext } from 'react'
import { DatosContexto } from './ComprasProvider'

const ItemCarrito = ({ pelicula }) => {

  const valorcontexto = useContext(DatosContexto)

  console.log(pelicula)

  return (
    <tr>
      <td>
        <div className='portada_tabla'>
          <img src={pelicula.portada} alt="portada" width={"100%"}></img>
        </div>
      </td>
      <td><h5>{pelicula.nombre}</h5></td>
      <td><h5>{pelicula.cantidad}</h5></td>
      <td><h5>{pelicula.precio}$</h5></td>
    </tr >
  )
}

export default ItemCarrito