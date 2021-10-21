import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import UseFoods from "../../../Hooks/UseFoods";

const Details = (props) => {
  const data = props.data;
  const handleAddToCart = props.handleAddToCart;

  const { id } = useParams();
  const { foods } = UseFoods();
  const convertNumberId = parseInt(id);
  const findFood = foods.find((food) => food.id === convertNumberId);
  const checkItem = data?.find((data) => data.id === convertNumberId);
  const [quantity, setQuantity] = useState(1);
  const increasePrice = () => {
    setQuantity(quantity + 1);
  };
  const decreasePrice = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={6}>
            <h1>{findFood?.name}</h1>
            <p>{findFood?.fullDescription}</p>
            <div className="d-flex">
              <h3 className="fw-bold fs-2 pt-2">
                ${findFood?.price * quantity}
              </h3>
              <div className="ms-5 border-2  rounded-pill bg-light">
                <button
                  onClick={increasePrice}
                  className="btn btn-danger rounded-pill"
                >
                  <i className="fas fa-plus "></i>
                </button>
                <span className="fs-3 ps-2">{quantity}</span>
                <button
                  onClick={decreasePrice}
                  className="btn btn-danger rounded-pill  ms-4"
                >
                  <i className="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <div>
              {checkItem ? (
                <>
                  <button
                    className="btn btn-danger  rounded-pill text-light px-4"
                    disabled
                  >
                    Add to Cart
                  </button>
                  <span className="mx-3 text-success">
                    Your Item is added to Cart
                  </span>
                </>
              ) : (
                <button
                  onClick={() => (
                    (findFood["quantity"] = quantity),
                    (findFood.price = findFood.price * quantity),
                    handleAddToCart(findFood)
                  )}
                  className="btn btn-danger  rounded-pill text-light px-4"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </Col>
          <Col sm={12} md={6}>
            <img className="w-100" src={findFood?.image} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Details;
