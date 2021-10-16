import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Food = (props) => {
  const { id, name, shortDescription, image, price } = props.data;
  return (
    <Col>
      <Link to={`/food/${id}`} className="text-dark text-decoration-none">
        <Card className="text-center border-0 h-100 p-3">
          <div>
            <Card.Img className="w-75" variant="top" src={image} />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <Card.Footer className="border-0  bg-light py-0">
            <Card.Text>{shortDescription}</Card.Text>
            <h5>${price}.99</h5>
          </Card.Footer>
        </Card>
      </Link>
    </Col>
  );
};

export default Food;
