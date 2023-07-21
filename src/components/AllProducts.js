import React from "react";
import "../assets/css/AllProducts.css";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProducts } from "../services/FetchApi";
import { Container } from "react-bootstrap";
import Title from "./Title";

const AllProducts = () => {
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery("products", fetchProducts);
  if (isLoading) {
    return <h4 className="mb-0">Loading..</h4>;
  }
  if (error) {
    return <h6 className="mb-0">{error.message}</h6>;
  }

  const handleNavigate = (product) => {
    
    //navigate to product-details page
    navigate(`/product-details/${product.id}`);
  };

  return (
    <>
      <div className="product-list py-4">
        <Title title="PRODUCTS" />
        <Container className="pb-3">
          {data.map((product) => (
            <div
              className="product-items"
              key={product.id}
              onClick={() => handleNavigate(product)}
            >
              <img src={product.image} alt="img" />
              <div className="product-details py-2">
                <h6 className="mb-0 pt-2">$ {product.price}</h6>
                <h5 className="mb-0 py-2">{product.title}</h5>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </>
  );
};

export default AllProducts;
