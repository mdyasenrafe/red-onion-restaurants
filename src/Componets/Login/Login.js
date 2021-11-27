import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FloatingLabel, Form } from "react-bootstrap";
import UseAuth from "../../Hooks/UseAuth";

const Login = () => {
  // get value from useAuth
  const { signInUsingGogle, setError, setIsLoading, setUser, signInWithEmail } =
    UseAuth();
  // get location and navigate
  const location = useLocation();
  const navigate = useNavigate();
  // set url where user from
  const redirectUrl = location?.state?.from?.pathname || "/home";
  // handleGogleSignin
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmail(data.email, data.password)
      .then((result) => {
        navigate.push(redirectUrl);
        const user = result.user;
        setUser(user);
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
  return (
    <section className="registation" style={{ height: "700px" }}>
      <div className="form-text">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FloatingLabel controlId="floatingInput" label="Enter Your Email">
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
              })}
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>
          {errors?.password?.type === "required" && (
            <h6 className="text-danger">This field is required</h6>
          )}

          <input
            className="btn btn-danger rounded-pill text-light px-3 d-block mt-4"
            type="submit"
          />
          <h6 className="mt-3">
            You do not Have Aceount ?
            <Link to="/signup" className=" text-danger">
              <span>Sign up Here</span>
            </Link>
          </h6>
        </Form>
        <div>
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
      </div>
    </section>
  );
};

export default Login;
