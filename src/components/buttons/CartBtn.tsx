import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartBtn = () => {
  const state = useSelector((state: any) => state.addItem);
  return (
    <>
      <NavLink to="/cart">
        <Button variant="contained" sx={{ textTransform: "capitalize", boxShadow: "none" }}>
          <ShoppingCartIcon sx={{ height: "20px", marginRight: "10px" }} />
          Cart({state.length})
        </Button>
      </NavLink>
    </>
  );
};

export default CartBtn;
