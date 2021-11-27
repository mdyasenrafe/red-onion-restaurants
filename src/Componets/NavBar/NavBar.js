import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import logo from "../../Images/logo2.png";
import "./NavBar.css";
import UseAuth from "../../Hooks/UseAuth";
import UseCart from "../../Hooks/UseCart";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { user, logOut } = UseAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="cursor-pointor">
          <img width="200 " src={logo} alt="logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-sm-center">
            <Nav.Link className="text-sm-center" to="/cart" as={Link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointor "
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-danger">{props?.data?.length}</span>
            </Nav.Link>
            {user?.displayName ? (
              <>
                <span className="d-flex align-items-center ms-4">
                  <span>{user?.displayName}</span>
                  <button
                    onClick={logOut}
                    className="btn btn-danger rounded-pill mx-2 text-light px-3 "
                  >
                    Log out
                  </button>
                </span>
              </>
            ) : (
              <>
                <Nav.Link to="/Login" as={Link}>
                  Log in
                </Nav.Link>
                <Nav.Link to="/signup" as={Link}>
                  <button className="btn btn-danger rounded-pill mx-3 text-light px-3 ">
                    Sign up
                  </button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
