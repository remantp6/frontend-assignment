import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const App = () => {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart/item" element={<Cart />} />
          <Route path="/product-details/:productId" element={<ProductDetailsPage />}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
