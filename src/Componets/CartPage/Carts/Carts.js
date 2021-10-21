import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import UseFoods from "../../../Hooks/UseFoods";
import { clearTheCart, removeFromDb } from "../../../LocalStorage/LocalStorage";
import Cart from "../Cart/Cart";
import ShipmentForm from "./ShipmentForm";

const Carts = (props) => {
  const { foods } = UseFoods();
  const { address } = UseAuth();
  const setCart = props.setCart;
  const handlePlace = () => {
    clearTheCart();
    setCart();
  };
  let price = 0;
  const increasePrice = (item) => {};
  const decreasePrice = (item) => {};
  let deliveryFee = 0;
  let tax = 0;

  for (const data of props?.data) {
    price = price + data.price;
    tax = (12 / 100) * price;
    deliveryFee = 5;
  }
  const handleRemove = (item) => {
    const newCart = props.data.filter((data) => data.name !== item);
    setCart(newCart);
    removeFromDb(item);
  };
  return (
    <div className="py-5">
      {props?.data?.length > 0 ? (
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <div>
                <h3>Edit Delivery Details</h3>
                <hr />
                <ShipmentForm></ShipmentForm>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="py-4">
                <p>
                  From
                  <span className="fw-bold text-danger ms-2">
                    Chattogram Plaza Restaura Gpr
                  </span>
                </p>
                <p>Arriving in 20-30min</p>
                <p>107 Rd No 8</p>
                {props.data.map((data) => (
                  <Cart
                    key={data.id}
                    data={data}
                    handleRemove={handleRemove}
                  ></Cart>
                ))}
                <div className="py-5">
                  <div className="d-flex justify-content-between">
                    <h5>Total :</h5> <h5 className="fw-bolder">$ {price}</h5>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <h5> Delivery Fee :</h5>{" "}
                      <h5 className="fw-bolder">${deliveryFee}</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h5> Tax :</h5>{" "}
                      <h5 className="fw-bolder">${tax.toFixed(2)}</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h5> Grand Total : </h5>
                      <h5 className="fw-bolder">
                        {" "}
                        ${(tax + price + deliveryFee).toFixed(2)}
                      </h5>
                    </div>
                  </div>
                </div>
                <div>
                  {address.length >= 4 ? (
                    <Link
                      onClick={handlePlace}
                      className="text-dark text-decoration-none"
                      to="/order-complete"
                    >
                      <button className="btn btn-outline-danger d-block w-100">
                        Place Order
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="btn btn-outline-danger d-block w-100"
                      disabled
                    >
                      Palace Order
                    </button>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className="d-flex justify-content-center align-items-center py-5">
          <h1 className="py-5 my-5 text-danger">Nothing Add to Cart</h1>
        </Container>
      )}
    </div>
  );
};

export default Carts;
