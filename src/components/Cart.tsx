import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { delItem } from "../redux/actions";

import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Cart = () => {
  const state = useSelector((state: any) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item: any) => {
    dispatch(delItem(item));
  };

  const table = () => {
    return (
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ margin: "auto", width: "60%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Item</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{state.length !== 0 && state.map(cartItems)}</TableBody>
        </Table>
      </TableContainer>
    );
  };

  const cartItems = (cartItem: any) => {
    return (
      <TableRow key={cartItem.title} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="center">
          <img src={cartItem.img} alt={cartItem.title} height="130px" width="auto" />
        </TableCell>
        <TableCell align="center">{cartItem.title}</TableCell>
        <TableCell align="center">{cartItem.price}€</TableCell>
        <TableCell align="center">
          <IconButton aria-label="close" onClick={() => handleClose(cartItem)}>
            <CloseIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  };

  const emptyCart = () => {
    return (
      <Typography sx={{ paddingBottom: "10px", marginBottom: "40px" }} variant="h3" align="center">
        Yout cart is empty
      </Typography>
    );
  };

  const button = () => {
    return (
      <NavLink to="/checkout" style={{ textDecoration: "none" }}>
        <Button variant="outlined" sx={{ display: "block", margin: "2em auto" }}>
          Proceed to checkout
        </Button>
      </NavLink>
    );
  };

  return (
    <Box sx={{ padding: "3em" }}>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && table()}
      {state.length !== 0 && button()}
    </Box>
  );
};

export default Cart;
