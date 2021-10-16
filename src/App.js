import "./App.css";
import NavBar from "./Componets/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Componets/HomePage/Home/Home";
import NotFound from "./Componets/NotFound/NotFound";
import Footer from "./Componets/Footer/Footer";
import Details from "./Componets/DetailsPage/Details/Details";
import { useState } from "react";
import Login from "./Componets/Login/Login";
import Registation from "./Componets/Registation/Registation";
import AuthProvider from "./Context/AuthProvider";
import Carts from "./Componets/CartPage/Carts/Carts";
import PrivateRoute from "./Componets/PrivateRoute/PrivateRoute";
import Map from "./Componets/Map/Map";

function App() {
  // const [count, setCount] = useState(1);
  const [cart, setCart] = useState([]);
  const handleAddToCart = (item) => {
    const newItem = [...cart, item];
    let CheckItem = [];
    for (const data of newItem) {
      if (CheckItem.indexOf(data) === -1) {
        CheckItem.push(data);
      }
    }
    setCart(CheckItem);
  };

  // const handlePlus = () => {
  //   setCount(count + 1);
  // };
  // const handleMinus = () => {
  //   setCount(count - 1);
  // };
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
            <Route path="/map">
              <Map></Map>
            </Route>
            <Route path="/signup">
              <Registation></Registation>
            </Route>
            <PrivateRoute path="/cart">
              <Carts data={cart}></Carts>
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
