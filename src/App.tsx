import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

import Shop from "./components/Shop";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Shop />} path="/shop" />
        <Route element={<Checkout />} path="/checkout" />
      </Routes>
    </>
  );
}

export default App;
