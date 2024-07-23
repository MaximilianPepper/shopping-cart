import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import shopService from "../services/store";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import { Margin } from "@mui/icons-material";

const Shop = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const test = await shopService.getTestData();
      setData(test);
    };
    getData();
  }, []);
  return (
    <div style={{ marginTop: "100px" }}>
      <SearchBar sx={{ width: "50%" }} />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          mt: "100px", // navbar fix
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "75%",
          flexWrap: "wrap",
          gap: 2,
          padding: 2,
        }}
      >
        {data.map((i) => (
          <ProductCard key={i.id} obj={i} />
        ))}
      </Container>
    </div>
  );
};

export default Shop;
