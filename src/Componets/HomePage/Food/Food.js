import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Food.css";

const Food = (props) => {
  const { id, name, shortDescription, image, price } = props.data;
  return (
    <Col>
      <Card className="text-center border-0 h-100 p-3 shadow-lg rounded-lg">
        <div>
          <Card.Img className="w-75" variant="top" src={image} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Card.Footer className="border-0  bg-light py-0">
          <Card.Text>{shortDescription}</Card.Text>
          <h5>${price}.99</h5>
          <Link to={`/food/${id}`} className="text-dark text-decoration-none">
            <button className="btn btn-danger">See Details</button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Food;
