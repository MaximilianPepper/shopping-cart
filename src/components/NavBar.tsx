//import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import reactLogo from "../assets/react.svg";
import { useSelector } from "react-redux";
function NavBar() {
  const cart = useSelector((state) => state.cart);

  let cartCounter = 0;
  if (Array.isArray(cart) && cart.length > 0) {
    cartCounter = cart.reduce((a, c) => a + (c.amount || 0), 0);
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(240, 240, 240, 0.5)",
        padding: "5px",
        color: "black",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            fontSize={"2em"}
            marginRight={"30px"}
          >
            Fake Shop
          </Typography>

          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              color: "inherit",
              textDecoration: "none",
              marginRight: 30,
              fontSize: "2em",
            }}
          >
            Home
          </Link>
          <Link
            to="/shop"
            style={{
              color: "inherit",
              textDecoration: "none",
              marginRight: 30,
              fontSize: "2em",
            }}
          >
            Shop
          </Link>

          <IconButton color="inherit">
            <Link
              to="/checkout"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Badge badgeContent={cartCounter} color="secondary">
                <ShoppingCartIcon sx={{ fontSize: "2em" }} />
              </Badge>
            </Link>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
