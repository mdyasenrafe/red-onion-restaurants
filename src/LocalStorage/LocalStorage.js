const addToDb = (id) => {
  const storedFood = getDb();
  if (id in storedFood) {
    storedFood[id] = storedFood[id] + 1;
  } else {
    storedFood[id] = 1;
  }
  console.log("stored Food Local Storage", storedFood);
  updateDb(storedFood);
};

const updateDb = (cart) => {
  localStorage.setItem("food", JSON.stringify(cart));
};

const clearTheCart = () => {
  localStorage.removeItem("food");
};

const removeFromDb = (id) => {
  const foodCart = getDb();
  delete foodCart[id];
  updateDb(foodCart);
};

const getDb = () => {
  const exists = localStorage.getItem("food");
  return exists ? JSON.parse(exists) : {};
};
export { addToDb, getDb, clearTheCart, removeFromDb };
