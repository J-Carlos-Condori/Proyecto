import React from "react";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";


const CartWidget=()=>{
  return(
    <IconButton>
      <Badge badgeContent={2} color="error">
        <a href="_blank">
          <ShoppingCartIcon />
        </a>
      </Badge>
    </IconButton>
  )
}
export default CartWidget;