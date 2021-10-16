import React, { useState } from "react";
import { Row } from "react-bootstrap";
import UseFoods from "../../../Hooks/UseFoods";
import Food from "../Food/Food";
import "./Foods.css";

const Foods = (props) => {
  const { foods } = UseFoods();
  const [type, setType] = useState("Lunch");

  console.log("home page", props?.data?.length);

  const selectFoods = foods.filter((food) => food.type === type);
  return (
    <section className="py-5 container">
      <nav>
        <ul className="nav justify-content-center">
          <li
            onClick={() => setType("Breakfast")}
            className="nav-item  cursor-pointor text-dark"
          >
            <span
              to="breakfast"
              className={
                type === "Breakfast" ? "active-type-link nav-link" : "nav-link"
              }
            >
              Breakfast
            </span>
          </li>
          <li
            onClick={() => setType("Lunch")}
            className="nav-item  cursor-pointor"
          >
            <span
              to="breakfast"
              className={
                type === "Lunch" ? "active-type-link nav-link" : "nav-link"
              }
            >
              Lunch
            </span>
          </li>
          <li
            onClick={() => setType("Dinner")}
            className="nav-item cursor-pointor"
          >
            <span
              to="breakfast"
              className={
                type === "Dinner" ? "active-type-link nav-link" : "nav-link"
              }
            >
              Dinner
            </span>
          </li>
        </ul>
      </nav>
      <Row xs={1} md={3} className="g-4">
        {selectFoods.map((food) => (
          <Food data={food} key={food.id}></Food>
        ))}
      </Row>
      <div className="text-center pt-5">
        {props.data?.length >= 1 ? (
          <button className="btn btn-danger rounded-lg">
            Check Out Your Food
          </button>
        ) : (
          <button className="btn btn-danger rounded-lg" disabled>
            Check Out Your Food
          </button>
        )}
      </div>
    </section>
  );
};

export default Foods;
