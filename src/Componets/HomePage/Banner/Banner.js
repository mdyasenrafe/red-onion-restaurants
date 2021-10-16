import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner" style={{ height: "600px" }}>
      <div className="banner-text">
        <h1 className="mb-5">Best Food Waiting for your Belly</h1>
        <div className="input-group banner-form mb-3">
          <input
            type="text"
            className="banner-input form-control"
            placeholder="Recipient's username "
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-danger rounded-pill  text-light px-4"
              type="button"
              id="button-addon2"
            >
              Searh
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
