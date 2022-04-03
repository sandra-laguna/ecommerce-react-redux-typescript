import React from "react";
import { NavLink } from "react-router-dom";
import { DATA } from "../Data";

import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { experimentalStyled as styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Product = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));

  const cardItem = () => {
    return DATA.map((item) => (
      <Grid item xs={4} sm={4} md={3} key={item.id} sx={{ padding: "20px" }}>
        <Item sx={{ padding: "2em 0" }} className="card">
          <img src={item.img} alt={item.title} style={{ height: "200px", width: "150px", objectFit: "contain" }} />
          <Typography variant="h6" align="center">
            {item.title}
          </Typography>

          <Typography variant="subtitle1" align="center" sx={{ margin: "0.5em 0" }}>
            {item.price}€
          </Typography>

          <NavLink to={`/product/${item.id}`}>
            <Button variant="outlined">Buy now</Button>
          </NavLink>
        </Item>
      </Grid>
    ));
  };

  return (
    <Box sx={{ padding: "50px" }}>
      <Typography
        sx={{ paddingBottom: "10px", marginBottom: "40px", borderBottom: "1px solid gray" }}
        variant="h3"
        align="center"
      >
        Products
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cardItem()}
      </Grid>
    </Box>
  );
};

export default Product;
