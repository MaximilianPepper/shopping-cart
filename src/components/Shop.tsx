import { Container } from "@mui/material";
import { useEffect } from "react";
import shopService from "../services/store";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../types";

const Shop = () => {
  // redux vars
  const dispatch = useDispatch();
  const data = useSelector((state: StateType) => state.products);
  const filter = useSelector((state: StateType) => state.filter.search);
  const category = useSelector((state: StateType) => state.filter.category);
  useEffect(() => {
    const getData = async () => {
      try {
        const products = await shopService.getAllData();

        dispatch({ type: "SET", payload: products });
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    getData();
  }, [dispatch]);
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedCategories = await shopService.getAllCategory();

        dispatch({ type: "CATEGORIES", payload: fetchedCategories });
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    getData();
  }, [dispatch]);
  return (
    <div style={{ marginTop: "100px" }}>
      <SearchBar />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          mt: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "75%",
          flexWrap: "wrap",
          gap: 2,
          padding: 2,
        }}
      >
        {data
          .filter((i) => category === "all" || i.category === category)
          .filter((i) => i.title.toLowerCase().includes(filter))
          .map((i) => (
            <ProductCard key={i.id} obj={i} />
          ))}
      </Container>
    </div>
  );
};

export default Shop;
