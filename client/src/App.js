import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/home";
import shop from "./pages/shop";
import About from "./pages/about";
import cart from "./cart/cart";
import Mags from "./inventory/Mags";
import Mods from "./inventory/Mods";
import Enigine from "./inventory/Enigine";
import Intake from "./inventory/Intake";
import Exhaust from "./inventory/Exhaust";
import Suspension from "./inventory/Suspension";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={shop} />
            <Route exact path="/about" component={About} />
            <Route exact path="/cart" component={cart} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Mags" component={Mags} />
            <Route exact path="/Mods" component={Mods} />
            <Route exact path="/Engine" component={Enigine} />
            <Route exact path="/Intake" component={Intake} />
            <Route exact path="/Exhaust" component={Exhaust} />
            <Route exact path="/Suspension" component={Suspension} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
