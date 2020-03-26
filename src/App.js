import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Game from "./Game";
import bg from "./images/bg.jpg"

function App() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="text-cent" >
      <Switch>
        <Route exact path="/game" component={Game} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
