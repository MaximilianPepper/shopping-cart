const filterReducer = (
  state = { search: "", category: "all" },
  action: { type: string; payload: string }
) => {
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
