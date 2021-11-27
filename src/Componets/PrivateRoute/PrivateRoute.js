import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, Route, useLocation } from "react-router";
import UseAuth from "../../Hooks/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = UseAuth();
  let location = useLocation();
  if (isLoading === true) {
    return <Spinner animation="border" variant="danger" />;
  }

  if (!user?.email) {
    <Navigate to="/login" state={{ from: location }}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
