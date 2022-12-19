import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DatosContexto } from "./ComprasProvider";

const CartWidget = () => {

  const valorcontexto = useContext(DatosContexto)
  console.log(valorcontexto.cantidad, "dentro del cart")
  return (
    <div className="carritoWidget">
      <Link to="/cart" className="waves-effect">
        <span className="material-icons">shopping_cart</span>
        <span>{valorcontexto.cantidadtotal}</span>
      </Link>
    </div>
  )
}
export default CartWidget;