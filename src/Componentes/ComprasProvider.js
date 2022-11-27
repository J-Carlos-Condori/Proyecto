import { createContext, useContext, useState } from 'react'


export const contexto = createContext()
const { Provider } = contexto

export const useCarrito = () => {
  return useContext(contexto)
}

const ComprasProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)


  const vaciarCarrito = () => {
    setCarrito([])
    setTotal(0)
  }

  const valorDelContexto = {
    pelicula: carrito,
    cantitad: total,
    vaciarCarrito: vaciarCarrito
  }

  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )
}


export default ComprasProvider