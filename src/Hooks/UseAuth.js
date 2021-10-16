import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const UseAuth = () => {
  return useContext(AuthContext);
};

export default UseAuth;
