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

function NavBar() {
  //const [cartItemCount, setCartItemCount] = useState(3); // Example item count

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
              <Badge badgeContent={2} color="secondary">
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
