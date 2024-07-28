import { ProductItem } from "../types";

const productsReducer = (
  state = [],
  action: { type: string; payload: ProductItem[] }
) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;
