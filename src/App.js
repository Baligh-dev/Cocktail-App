import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Navbarx from "./Components/Navbar";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Cocktail from "./Components/Cocktail/Cocktail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("");

  return (
    <div className="App">
      <Navbarx filter={filter} setFilter={setFilter} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} filter={filter} />}
        ></Route>
        <Route path="/about" component={AboutUs}></Route>
        <Route path="/drinks/:idDrink" component={Cocktail}></Route>
      </Switch>
    </div>
  );
}

export default App;
