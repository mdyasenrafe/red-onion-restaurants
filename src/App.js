import NavBar from "./Componets/NavBar/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
  const [price1, setPrice1] = useState(0);
  const { foods } = UseFoods();

  const handleAddToCart = (item) => {
    addToDb(item.name);
    const newItem = [...cart, item];
    console.log(newItem);
    let CheckItem = [];
    for (const data of newItem) {
      if (CheckItem.indexOf(data) === -1) {
        CheckItem.push(data);
      }
    }

    setCart(CheckItem);
  };

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

  const handlePlus = (item) => {
    const quantity = item.quantity;
    const total = quantity + 1;
    console.log(total);
  };

  return (
    <>
      <AuthProvider>
        <Router>
          <NavBar data={cart}></NavBar>
          <Switch>
            <Route path="/home">
              <Home data={cart}></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/order-complete">
              <OrderComplete></OrderComplete>
            </PrivateRoute>
            <Route path="/signup">
              <Registation></Registation>
            </Route>
            <PrivateRoute path="/cart">
              <Carts
                price1={price1}
                setPrice1={setPrice1}
                setCart={setCart}
                data={cart}
              ></Carts>
            </PrivateRoute>
            <Route path="/food/:id">
              <Details data={cart} handleAddToCart={handleAddToCart}></Details>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
