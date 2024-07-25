const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { ...action.payload, amount: action.amount }];

    default:
      return state;
  }
};

export default cartReducer;
