import { Category } from "../types";

const categoriesReducer = (
  state = [],
  action: { type: string; payload: Category[] }
) => {
  switch (action.type) {
    case "CATEGORIES":
      return action.payload;

    default:
      return state;
  }
};

export default categoriesReducer;
