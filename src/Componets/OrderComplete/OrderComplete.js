import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UseAuth from "../../Hooks/UseAuth";
import Map from "../Map/Map";
import image from "../../Images/Group 1151.png";
import riderImage from "../../Images/Group 1152.png";

const OrderComplete = () => {
  const { address } = UseAuth();
  console.log(address);
  return (
    <section>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <Map></Map>
          </Col>
          <Col sm={12} md={6}>
            <div className=" p-5 shadow-lg">
              <img className="h-25 w-50 text-center" src={image} alt="" />
              <ul className="mt-5">
                <li className="fs-5">Your Location</li>
                <p>{address}</p>
              </ul>
              <ul className="mt-5">
                <li className="fs-5">Shop Address</li>
                <p>Pahartali Chattogram</p>
              </ul>
              <div className="px-3 shdow-lg card border-0">
                <h3>09 : 30</h3>
                <p>Estimated Delivery Time</p>
              </div>
              <div className="card flex-row p-2 border-0 shadow-lg">
                <div>
                  <img width="50" src={riderImage} alt="" />
                </div>
                <div className="px-5">
                  <h3>Hamim</h3>
                  <p>Your Rider</p>
                </div>
              </div>
              <div>
                <button className="btn btn-danger rounded w-100 d-block mt-5">
                  Contact
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OrderComplete;
