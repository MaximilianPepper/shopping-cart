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

const ProductCard = ({ obj }) => {
  const [quantity, setQuantity] = useState(0);
  const title = obj.title;
  const image = obj.image;
  // const description = obj.description; removed this because i want to create a route to display information (TODO)
  const price = obj.price;
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card sx={{ width: 345, margin: "20px", height: 400 }}>
      <CardMedia
        component="img"
        alt={title}
        height="200"
        image={image}
        style={{
          width: "100%",
          objectFit: "contain", // Ensures the entire image is visible
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
