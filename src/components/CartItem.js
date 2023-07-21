import React from "react";
import "../assets/css/CartItem.css";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../redux/feature/CartSlice";
import Button from "./Button";

const CartItem = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  const handleRemoveItem = (productId) => {
   
    dispatch(removeToCart(productId));
  };
  return (
    <>
      <div className="cart-item-section py-3">
        <Container>
          {items.length === 0 ? (
            <div className="empty-cart-message">
              <p>No Products in the Cart</p>
            </div>
          ) : (
            items.map((product) => (
              <div className="cart-item py-4" key={product.id}>
                <Row>
                  <Col md={3}>
                    <img src={product.image} alt="img" />
                  </Col>
                  <Col md={8}>
                    <div className="cart-item-article">
                      <h5>{product.category}</h5>
                      <h4>{product.title}</h4>
                      <p className="mb-0">{product.description}</p>
                      <p className="mt-2 mb-0 rating">
                        Rating: {product.rating.rate}
                      </p>
                      <p className="mb-2">Price: {product.price}</p>
                      <Button
                        onClick={() => handleRemoveItem(product.id)}
                        label="Remove From Cart"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            ))
          )}
        </Container>
      </div>
    </>
  );
};

export default CartItem;
