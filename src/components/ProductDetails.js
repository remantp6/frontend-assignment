import React, { useState } from "react";
import "../assets/css/ProductDetails.css"
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProductById } from "../services/FetchApi";
import { Col, Container, Row } from "react-bootstrap";
import Button from "./Button";
import SnackBar from "./SnackBar";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/feature/CartSlice";

const ProductDetails = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  //useDispatch hook provides access to the Redux dispatch function.
  const dispatch = useDispatch();

  //useParams hook is used to access URL parameters.
  const { productId } = useParams();

  //useQuery is used to fetch the product details using the fetchProductDetails function
  //and catch result in product variable.
  const { data: product, isLoading } = useQuery(["product", productId], () =>
    fetchProductById(productId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  //handleClick() function that adds product from the cart using Redux.
  const handleClick = (product) => {
    
    //dispatches the addToCart action from the CartSlice feature in Redux
    dispatch(addToCart(product));
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 2000);
  };
  return (
    <>
      <div className="product-details">
        <Container>
        <div className="d-flex justify-content-between py-4">
          <h2 className="mb-0">Product Details</h2>
          {showSnackbar && <SnackBar message="Item added" />}
          </div>
          {product && (
            <div className="product-content py-2">
              <Row>
                <Col md={3}>
                  <img src={product.image} alt="img" className=" my-3" />
                </Col>
                <Col md={8}>
                  <div className="product-content-article mt-3">
                    <h5>{product.category}</h5>
                    <h4>{product.title}</h4>
                    <p className="mb-0 fs-5">{product.description}</p>
                    <p className="mb-0 my-2">Rating: {product.rating.rate}</p>
                    <p className="mt-2">Price: {product.price}</p>
                    <Button
                      onClick={() => handleClick(product)}
                      label="Add To Cart"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default ProductDetails;
