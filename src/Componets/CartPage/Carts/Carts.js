import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import ShipmentForm from "./ShipmentForm";

const Carts = (props) => {
  const { address, setAdress } = UseAuth();
  let subLotal = 0;
  let deliveryFee = 0;
  let tax = 0;
  console.log(props.data);
  for (const data of props.data) {
    subLotal = subLotal + data.price;
    tax = (12 / 100) * subLotal;
    deliveryFee = 5;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setAdress(data.address);
  return (
    <div className="py-5">
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
                <span className="fw-bold">Chattogram Plaza Restaura Gpr</span>
              </p>
              <p>Arriving in 20-30min</p>
              <p>107 Rd No 8</p>
              {props.data.map((data) => {
                return (
                  <>
                    <div className="d-flex align-items-center p-3 mt-4 shadow-lg rounded-lg">
                      <div className="d-flex align-items-center">
                        <img className="w-25" src={data?.image} alt="" />
                        <div className="text-center">
                          <h5 className="ms-3">{data?.name}</h5>
                          <h4 className="text-danger fw-bolder">
                            ${data?.price}
                          </h4>
                        </div>
                      </div>
                      <div className="d-flex">
                        <h4>
                          <i className="fas fa-plus cursor-pointor"></i>
                        </h4>
                        <h4 className="bg-light mx-2">1</h4>
                        <h4>
                          <i className="fas fa-minus cursor-pointor"></i>
                        </h4>
                      </div>
                    </div>
                  </>
                );
              })}
              <div className="py-5">
                <div className="d-flex justify-content-between">
                  <h5>Total :</h5> <h5>$ {subLotal}</h5>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <h5> Delivery Fee :</h5> <h5>${deliveryFee}</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5> Tax :</h5> <h5>{tax.toFixed(2)}</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5> Grand Total : </h5>
                    <h5>{tax + subLotal + deliveryFee}</h5>
                  </div>
                </div>
              </div>
              <div>
                {address.length >= 4 ? (
                  <Link
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
    </div>
  );
};

export default Carts;
