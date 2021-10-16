import React from "react";
import Banner from "../Banner/Banner";
import Chooses from "../Chooses/Chooses";
import Foods from "../Foods/Foods";

const Home = ({ data }) => {
  return (
    <>
      <Banner></Banner>
      <Foods data={data}></Foods>
      <Chooses></Chooses>
    </>
  );
};

export default Home;
