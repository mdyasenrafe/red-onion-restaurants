const addToDb = (id) => {
  const storedFood = getDb();
  if (id in storedFood) {
    storedFood[id] = storedFood[id] + 1;
  } else {
    storedFood[id] = 1;
  }
  updateDb(storedFood);
};

const updateDb = (cart) => {
  localStorage.setItem("food", JSON.stringify(cart));
};

const clearTheCart = () => {
  localStorage.removeItem("food");
};

// const removeDb =(id)=>{
//     const storedCart = getdb()
//     delete stored
// }

const getDb = () => {
  const exists = localStorage.getItem("food");
  return exists ? JSON.parse(exists) : {};
};
export { addToDb, getDb, clearTheCart };
