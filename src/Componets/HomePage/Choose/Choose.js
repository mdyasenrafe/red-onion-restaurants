import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import arrowIcon from "../../../Images/next.png";
import upArrowIcon from "../../../Images/up.png";

const Choose = (props) => {
  const { icon, image, title, description } = props.data;
  const [collaspe, setCollaspe] = useState(false);
  const showMore = () => {
    setCollaspe(true);
  };
  const showLess = () => {
    setCollaspe(false);
  };

  return (
    <Col className="">
      <Card className=" border-0 p-5">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            <p>
              <img src={icon} alt="" />
              <span className="ps-3">{title}</span>
            </p>
          </Card.Title>
          <Card.Text>
            {collaspe ? description : description.slice(0, 150)}
          </Card.Text>

          {collaspe === true ? (
            <p>
              <span
                onClick={() => setCollaspe(false)}
                className="text-primary cursor pointor"
              >
                See less
              </span>
              <img
                onClick={() => setCollaspe(false)}
                width="40"
                className="ps-4 cursor-pointor"
                src={upArrowIcon}
                alt=""
              />
            </p>
          ) : (
            <p>
              <span
                onClick={() => setCollaspe(true)}
                className="text-primary cursor-pointor"
              >
                See More
              </span>
              <img
                onClick={() => setCollaspe(true)}
                width="40"
                className="ps-4 cursor-pointor"
                src={arrowIcon}
                alt=""
              />
            </p>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Choose;
