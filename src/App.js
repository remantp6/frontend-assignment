import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart/item" element={<Cart />} />
          <Route path="/product-details/:productId" element={<ProductDetailsPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
