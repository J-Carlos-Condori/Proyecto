import { createContext, useState } from 'react'


export const DatosContexto = createContext();

const { Provider } = DatosContexto;

export const ComprasProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)
  const [cantidadtotal, setCantidadtotal] = useState(0)


  const vaciar = () => {
    setCarrito([])
    setTotal(0)
    setCantidadtotal(0)
  }


  const agregar = (lasPeliculas, cantidad) => {

    if (isInCart.inCart) {

      setCarrito(carrito.map((pelicula) => {

        if (pelicula.id === isInCart.id) {
          return { ...isInCart, cantidad: isInCart.cantidad + cantidad }
        } else return pelicula
      }))

    } else {


      setCarrito([
        ...carrito,
        {
          ...lasPeliculas, cantidad
        }
      ])
      setTotal(total + lasPeliculas.precio * cantidad)
      setCantidadtotal(cantidadtotal + cantidad)
    }


  }


  const isInCart = (id) => {
    return { inCart: false, item: {}, index: 0 }
  }

  const valorDelContexto = {
    peliculasagregadas: carrito,
    cantidad: total,
    cantidadtotal: cantidadtotal,


    vaciar: vaciar,
    agregar: agregar
  }

  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  );
}

export default ComprasProvider