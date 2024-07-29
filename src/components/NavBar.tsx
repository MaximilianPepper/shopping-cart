import { useState } from "react";
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
import { StateType } from "../types";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import ListItemText from "@mui/material/ListItemText";
import { ListItemButton } from "@mui/material";

function NavBar() {
  const cart = useSelector((state: StateType) => state.cart);

  let cartCounter = 0;
  if (Array.isArray(cart) && cart.length > 0) {
    cartCounter = cart.reduce((a, c) => a + (c.amount || 0), 0);
  }

  const [drawerOpen, setDrawerOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      (event.type === "keydown" && event.key === "Tab") ||
      event.key === "Shift"
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = (
    <List>
      <ListItemButton component={Link} to="/" onClick={toggleDrawer(false)}>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton component={Link} to="/shop" onClick={toggleDrawer(false)}>
        <ListItemText primary="Shop" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/checkout"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="Checkout" />
      </ListItemButton>
    </List>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(240, 240, 240, 0.9)",
          padding: "5px",
          color: "black",
          fontFamily: "Inter,san-serif",
          boxSizing: "border-box",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              "@media (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            <Typography
              variant="h6"
              component="div"
              fontSize={"30px"}
              marginRight={"30px"}
            >
              Fake Shop
            </Typography>

            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "@media (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            <Link
              to="/"
              style={{
                color: "inherit",
                textDecoration: "none",
                marginRight: 30,
                fontSize: "30px",
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
                fontSize: "30px",
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
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            fontSize={"24px"}
            marginBottom={"16px"}
            textAlign="center"
          >
            Fake Shop
          </Typography>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={reactLogo}
              className="logo react"
              alt="React logo"
              style={{ marginBottom: "16px" }}
            />
          </a>
          {menuItems}
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;
