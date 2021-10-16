import React from "react";
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
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <h1>{findFood?.name}</h1>
            <p>{findFood?.fullDescription}</p>
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
                  onClick={() => handleAddToCart(findFood)}
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
