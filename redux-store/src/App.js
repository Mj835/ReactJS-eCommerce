import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Nav from "./components/Nav";
import store from "./store";
import Details from "./components/Details";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/details/:id" exact component={Details} />
        </div>
      </Provider>
    </Router>
  );
};

export default App;
