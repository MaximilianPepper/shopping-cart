import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ProductItem } from "../types";

interface ProductCardProps {
  obj: ProductItem;
}
const ProductCard = ({ obj }: ProductCardProps) => {
  const [quantity, setQuantity] = useState<number>(0);
  const title = obj.title;
  const image = obj.image;
  // const description = obj.description; removed this because i want to create a route to display information (TODO)
  const price = obj.price;
  const dispatch = useDispatch();
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    if (quantity > 0) {
      dispatch({ type: "ADD_TO_CART", payload: obj, amount: quantity });
      setQuantity(0);
    }
  };

  return (
    <Card sx={{ width: 345, margin: "20px", height: 450 }}>
      <CardMedia
        component="img"
        alt={title}
        height="200"
        image={image}
        style={{
          width: "100%",
          objectFit: "contain", // Ensures the entire image is visible
          marginTop: "5px",
        }}
      />
      <CardContent sx={{ height: "150px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ overflow: "hidden", textOverflow: "ellipsis", height: "128px" }}
        >
          {title}
        </Typography>

        <Typography variant="h6" component="div" sx={{ mt: 1 }}>
          ${price}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={handleDecrease}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1" sx={{ mx: 2 }}>
            {quantity}
          </Typography>
          <IconButton onClick={handleIncrease}>
            <AddIcon />
          </IconButton>
        </Box>
        <Button variant="contained" color="primary" onClick={addToCart}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
