import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "./ComprasProvider";


const CartWidget = () => {

  const peticion = useContext(contexto)


  return (
    <div className="carritoWidget">
      <Link to="/cart" className="waves-effect">
        <span className="material-icons">shopping_cart</span>
        <span>{peticion.cantitad}</span>
      </Link>
    </div>
  )
}
export default CartWidget;