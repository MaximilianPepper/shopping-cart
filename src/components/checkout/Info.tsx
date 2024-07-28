import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { StateType } from "../../types";

export default function Info() {
  const cart = useSelector((state: StateType) => state.cart);
  const totalPrice = cart
    .reduce((p, c) => p + c.price * c.amount, 0)
    .toFixed(2);
  return (
    <React.Fragment>
      <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        ${totalPrice}
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.title}
              secondary={`${product.amount} X $${product.price}`}
            />
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              ${product.price * product.amount}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
