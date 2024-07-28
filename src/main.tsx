import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./reducers/productsReducer.tsx";
import filterReducer from "./reducers/filterReducer.tsx";
import categoriesReducer from "./reducers/categoriesReducer.tsx";
import cartReducer from "./reducers/cartReducer.tsx";
const reducer = combineReducers({
  products: productsReducer,
  filter: filterReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router basename="/shopping-cart">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
