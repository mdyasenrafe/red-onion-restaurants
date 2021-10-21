import React from "react";

const Cart = (props) => {
  return (
    <div className="d-flex align-items-center p-3 mt-4 shadow-lg rounded-lg">
      <div className="d-flex align-items-center">
        <img className="w-25" src={props.data.image} alt="" />
        <div className="text-center">
          <h5 className="ms-3">{props.data.name}</h5>
          <h4 className="text-danger fw-bolder">${props.data.price}</h4>
        </div>
      </div>
      <div>
        <i
          onClick={() => props.handleRemove(props.data.name)}
          className="far fa-trash-alt cursor-pointor"
        ></i>
      </div>
    </div>
  );
};

export default Cart;
