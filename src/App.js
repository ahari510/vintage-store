import React from "react";
import {
  Home,
  About,
  Products,
  Checkout,
  Login,
  Error,
  ProductDetails,
  Cart,
} from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id" children={<ProductDetails />} />
        <Route exact path="/*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
