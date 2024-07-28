import { ProductItem } from "../types";

const cartReducer = (
  state = [],
  action: { type: string; payload: ProductItem; amount: number }
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { ...action.payload, amount: action.amount }];

    default:
      return state;
  }
};

export default cartReducer;
