import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Food.css";

const Food = (props) => {
  const { id, name, shortDescription, image, price } = props.data;
  return (
    <Col>
      <Card className="text-center border-0 p-2  mx-4 mx-md-0 mt-5  ">
        <div>
          <Card.Img className="w-75" variant="top" src={image} />
        </div>
        <Card.Body className="">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{shortDescription}</Card.Text>
          <h5>${price}.99</h5>
        </Card.Body>
        <Card.Footer>
          <Link to={`/food/${id}`} className="text-dark text-decoration-none">
            <button className="btn btn-danger">See Details</button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Food;
