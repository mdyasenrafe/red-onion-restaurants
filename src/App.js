import NavBar from "./Componets/NavBar/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Componets/HomePage/Home/Home";
import NotFound from "./Componets/NotFound/NotFound";
import Footer from "./Componets/Footer/Footer";
import Details from "./Componets/DetailsPage/Details/Details";
import { useEffect, useState } from "react";
import Login from "./Componets/Login/Login";
import Registation from "./Componets/Registation/Registation";
import AuthProvider from "./Context/AuthProvider";
import Carts from "./Componets/CartPage/Carts/Carts";
import PrivateRoute from "./Componets/PrivateRoute/PrivateRoute";
import OrderComplete from "./Componets/OrderComplete/OrderComplete";
import { addToDb, getDb } from "./LocalStorage/LocalStorage";
import UseFoods from "./Hooks/UseFoods";

function App() {
  const [cart, setCart] = useState([]);
  const { foods } = UseFoods();

  // add to cart
  const handleAddToCart = (item) => {
    addToDb(item.name);
    const newItem = [...cart, item];
    let CheckItem = [];
    for (const data of newItem) {
      if (CheckItem.indexOf(data) === -1) {
        CheckItem.push(data);
      }
    }

    setCart(CheckItem);
  };

  // get db from local storage
  useEffect(() => {
    if (foods.length) {
      const getDbMeal = getDb();
      let storeCart = [];
      for (const key in getDbMeal) {
        const addedMeal = foods.find((data) => data.name === key);
        if (addedMeal) {
          storeCart.push(addedMeal);
        }
      }
      setCart(storeCart);
    }
  }, [foods]);

  return (
    <>
      <AuthProvider>
        <Router>
          <NavBar data={cart}></NavBar>
          <Routes>
            <Route path="/home" element={<Home data={cart}></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route
              path="/order-complete"
              element={
                <PrivateRoute>
                  <OrderComplete></OrderComplete>
                </PrivateRoute>
              }
            ></Route>
            <Route path="/signup" element={<Registation></Registation>}></Route>
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Carts setCart={setCart} data={cart}></Carts>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/food/:id"
              element={
                <Details
                  data={cart}
                  handleAddToCart={handleAddToCart}
                ></Details>
              }
            ></Route>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
