import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Checkout = () => {
  const state = useSelector((state: any) => state.addItem);

  var total: number = 0;

  const itemList = (item: any) => {
    total = total + item.price;
    return (
      <TableRow key={item.title} sx={{ "td": { padding: "10px" }, "td, th": { border: "1px solid lightgray" } }}>
        <TableCell align="center">{item.title}</TableCell>
        <TableCell align="center">{item.price}€</TableCell>
      </TableRow>
    );
  };

  return (
    <Container>
      <Box sx={{ width: "60%", margin: "auto" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "40px 0",
            paddingBottom: "5px",
            borderBottom: "1px solid gray"
          }}
        >
          <Typography variant="h4">Your cart</Typography>

          <Typography
            sx={{
              width: "30px",
              height: "30px",
              backgroundColor: "#1976d2",
              borderRadius: "50%",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold"
            }}
          >
            {state.length}
          </Typography>
        </Box>

        <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
          <Table sx={{ border: "1px solid lightgray" }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#F8F9FA" }}>
              <TableRow sx={{ th: { padding: "5px" } }}>
                <TableCell align="center">Item</TableCell>
                <TableCell align="center">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.length !== 0 && state.map(itemList)}
              <TableRow sx={{ th: { padding: "5px" } }}>
                <TableCell align="center">Total:</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  {total}€
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Checkout;
