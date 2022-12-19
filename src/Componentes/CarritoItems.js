import React, { useContext } from 'react'
import { DatosContexto } from './ComprasProvider'
import ItemCarrito from './ItemCarrito'

export const CarritoItems = ({ peliculas }) => {

  const valorcontexto = useContext(DatosContexto)

  const carrito = valorcontexto.peliculasagregadas

  const handlevaciar = valorcontexto.vaciar



  return (
    <div className='container'>
      <div>
        <h3>Listado carrito</h3>

        <table className='striped'>
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio c/u</th>
            </tr>
          </thead>

          <tbody>
            {peliculas.map((pelicula) => {
              return (<ItemCarrito key={pelicula.portada} pelicula={pelicula} />
              )
            })}

            <tr>
              <th></th>
              <th></th>
              <td><h5>PAGO TOTAL</h5></td>
              <td><h5>{valorcontexto.cantidad}$</h5></td>
            </tr>
          </tbody>

        </table>


      </div>

      <div>
        {
          carrito.length !== 0 ? <button className='boton' onClick={handlevaciar}>Vaciar Carrito</button> : <h2>Se vacio el carrito</h2>
        }
      </div>

      <div>
        {
          carrito.length !== 0 ? <button className='boton' onClick={handlevaciar}>Confirmar Compra</button> : <h2></h2>
        }
      </div>

    </div>


  )
}

export default CarritoItems