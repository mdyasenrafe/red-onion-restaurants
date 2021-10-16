import { useEffect, useState } from "react";

const UseFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/7bdb5005-4e31-492e-a547-1c752000f3bd")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return { foods };
};

export default UseFoods;
