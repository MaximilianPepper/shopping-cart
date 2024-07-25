const filterReducer = (state = { search: "", category: "all" }, action) => {
  switch (action.type) {
    case "FILTER":
      return { ...state, search: action.payload.toLowerCase() };
    case "CATEGORY":
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
