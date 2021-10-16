import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Choose from "../Choose/Choose";

const Chooses = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("./ChooseData.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <section className="container">
      <div className="py-5">
        <h1>
          Why You <span className="text-danger">Choose</span> Us
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          fuga facere odio repudiandae fugiat
        </p>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {datas.map((data) => (
          <Choose data={data} key={data.id}></Choose>
        ))}
      </Row>
    </section>
  );
};

export default Chooses;
