import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

import CartBtn from "../components/buttons/CartBtn";
import LoginBtn from "../components/buttons/Login";
import SignupBtn from "../components/buttons/Signup";

import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const pages: string[] = ["home", "product", "about", "contact"];

  const sm = useMediaQuery("(min-width:640px)");

  const handleOpenMenu = () => {
    console.log("hello");
  };

  const menuIcon = () => {
    if (!sm) {
      return (
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleOpenMenu}>
          <MenuIcon />
        </IconButton>
      );
    }
  };

  const renderItems = () => {
    if (sm) {
      return pages.map((page) => (
        <MenuItem key={page}>
          <NavLink
            to={page}
            style={{ color: "gray", textDecoration: "none", fontSize: "1em", textTransform: "capitalize" }}
          >
            {page}
          </NavLink>
        </MenuItem>
      ));
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#F8F9FA", boxShadow: "none" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {menuIcon()}

        <Box style={{ display: "flex" }}>{renderItems()}</Box>

        <Typography variant="h6" style={{ color: "darkslategray", fontFamily: "Roboto" }}>
          ECOMMERCE
        </Typography>

        <Box sx={{ display: "flex", gap: "10px" }}>
          <LoginBtn />
          <SignupBtn />
          <CartBtn />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
