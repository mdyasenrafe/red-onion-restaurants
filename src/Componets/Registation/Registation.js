import React, { useRef } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import "./Registation.css";

const Registation = () => {
  const {
    signInUsingGogle,
    createEmailUser,
    setError,
    setIsLoading,
    setUser,
    updateProfileEmail,
  } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectUrl = location?.state?.from?.pathname || "/home";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleGogleSignin = () => {
    signInUsingGogle()
      .then((result) => {
        navigate(redirectUrl);
        setError("");
        setIsLoading(false);
        setUser(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setUser({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
    createEmailUser(data.email, data.password, data.name)
      .then((result) => {
        updateProfileEmail(data.name);
        navigate.push(redirectUrl);
        setIsLoading(false);
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <section className="registation" style={{ height: "700px" }}>
      <div className="form-text">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Your Name"
            className="mb-3"
          >
            <Form.Control
              placeholder="Enter Your Name"
              type="name"
              {...register("name", { required: true })}
            />
          </FloatingLabel>
          {errors?.name?.type === "required" && (
            <h6 className="text-danger">This field is required</h6>
          )}
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Your Email"
            className="mb-3"
          >
            <Form.Control
              className="mb-3"
              placeholder="Enter Your Email"
              type="email"
              {...register("email", { required: true })}
            />
          </FloatingLabel>
          {errors.email && (
            <h6 className="text-danger">This field is required</h6>
          )}
          <FloatingLabel
            controlId="floatingPassword"
            className="mb-3"
            label="Enter Your Password"
          >
            <Form.Control
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*?[#?!@$%^&*-])/,
              })}
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>
          {errors?.password?.type === "required" && (
            <h6 className="text-danger">This field is required</h6>
          )}
          {errors?.password?.type === "minLength" && (
            <h6 className="text-danger">Password minimum 6 in length</h6>
          )}
          {errors?.password?.type === "maxLength" && (
            <h6 className="text-danger">Password minimum 20 in length</h6>
          )}
          {errors?.password?.type === "pattern" && (
            <h6 className="text-danger">
              Password At least one special character
            </h6>
          )}

          <FloatingLabel
            controlId="floatingPassword"
            className="mb-3"
            label="Enter Your Re-Password"
          >
            <Form.Control
              placeholder="Enter Your password"
              type="password"
              {...register("password_repeat", {
                required: true,
                validate: (value) =>
                  value === password.current || "The Passwords do not match",
              })}
            />
          </FloatingLabel>
          {errors?.password_repeat?.type === "required" && (
            <h6 className="text-danger">This field is required</h6>
          )}
          {errors?.password_repeat?.type === "validate" && (
            <h6 className="text-danger">{errors.password_repeat.message}</h6>
          )}
          <input
            className="btn btn-danger rounded-pill text-light px-3 d-block mt-4"
            type="submit"
          />
        </Form>

        <div className="text-center">
          <Link to="/login" className=" text-danger">
            <p className="mt-3">ALready Have an Aceount</p>
          </Link>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={handleGogleSignin}
            style={{ width: "350px" }}
            className="btn btn-danger rounded-pill text-light px-3 py-2 d-block mt-4"
          >
            <i className="fab fa-google"></i>
            <span className="mx-3"> Sign in With Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Registation;
