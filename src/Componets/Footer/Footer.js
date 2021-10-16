import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="bg-dark py-5 mt-5">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <Link to="/home">
              <img className="pt-4" width="200px" src={logo} alt="" />
            </Link>
          </Col>
          <Col sm={12} md={6}>
            <Row>
              <Col sm={12} md={6}>
                <ul className="nav-item  pt-4">
                  <li className=" footer-nav-link">About Us</li>
                  <li className=" footer-nav-link">Read Our Blog</li>
                  <li className=" footer-nav-link">Add Your Restaurent</li>
                </ul>
              </Col>
              <Col sm={12} md={6}>
                <ul className="nav-item text-light pt-4">
                  <li className=" footer-nav-link">Get Help</li>
                  <li className=" footer-nav-link">Read FAQS</li>
                  <li className=" footer-nav-link">Privacy Policy</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
