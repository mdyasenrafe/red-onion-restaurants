import React from "react";
import { FloatingLabel, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";

const ShipmentForm = () => {
  const { address, setAdress } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setAdress(data.address);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Your Name"
        className="mb-3 w-75"
      >
        <Form.Control {...register("name", { required: true })} />
      </FloatingLabel>
      {errors.name && (
        <span className="text-danger">This field is required</span>
      )}
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Your Email address"
        className="mb-3 mt-2 w-75"
      >
        <Form.Control
          {...register("email", { required: true })}
          type="email"
          placeholder="name@example.com"
        />
      </FloatingLabel>
      {errors.email && (
        <span className="text-danger">This field is required</span>
      )}
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Your  address"
        className="mb-3 mt-2 w-75"
      >
        <Form.Control
          onBlur={(e) => setAdress(e.target.value)}
          {...register("address", { required: true, minLength: "5" })}
          type="address"
          placeholder="Enter Your Adress"
        />
      </FloatingLabel>
      {errors.address?.type === "required" && (
        <span className="text-danger">This field is required</span>
      )}
      {errors.address?.type === "minLength" && (
        <span className="text-danger">Your Address is not Valid</span>
      )}
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Your Phone Number"
        className="mb-3 mt-2 w-75"
      >
        <Form.Control
          {...register("phone", { required: true })}
          type="tel"
          placeholder="Enter Your Phone Number"
        />
      </FloatingLabel>
      {errors.phone && (
        <span className="text-danger">This field is required</span>
      )}
      <br />
      <input className="btn btn-danger" type="submit" />
    </Form>
  );
};

export default ShipmentForm;
