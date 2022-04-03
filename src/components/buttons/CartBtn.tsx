import { NavLink } from "react-router-dom";

import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartBtn = () => {
  return (
    <>
      <NavLink to="/cart">
        <Button variant="contained" sx={{ textTransform: "capitalize", boxShadow: "none" }}>
          <ShoppingCartIcon sx={{ height: "20px", marginRight: "10px" }} />
          Cart(0)
        </Button>
      </NavLink>
    </>
  );
};

export default CartBtn;
