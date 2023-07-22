import React from "react";
import "../assets/css/CartItem.css";
import emptyCart from "../assets/images/emptyCart.png";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../redux/feature/CartSlice";
import Button from "./Button";

const CartItem = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.orders);
  console.log(items);
  const handleRemoveItem = (productId) => {
    dispatch(removeToCart({ index: productId }));
  };
  return (
    <>
      <div className="cart-item-section py-3">
        <Container>
          {items.length === 0 ? (
            <div className="empty-cart-message text-center py-5">
              <img
                src={emptyCart}
                alt="cart-img"
                style={{ width: 700, height: "auto" }}
              />
              <p className="fs-4">No Products in the Cart</p>
            </div>
          ) : (
            items.map((product, index) => (
              <div className="cart-item py-4" key={product.id}>
                <Row>
                  <Col md={3} className="pb-4">
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
                        onClick={() => handleRemoveItem(index)}
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
