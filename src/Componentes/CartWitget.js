import React from "react";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const CartWidget=()=>{
  return(
    <Link to="/cart">
      <IconButton>
        <Badge badgeContent={2} color="error">
          <a href="_blank">
            <ShoppingCartIcon />
          </a>
        </Badge>
      </IconButton>
    </Link>
  )
}
export default CartWidget;