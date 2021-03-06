import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Game from "./Game";
import Test from "./Ending";
import EndGame from "./EndGame"
import bg from "./images/bg.jpg";

function App() {
  return (
    <div className="container-fluid" style={{ width: "100%", height: "100%" }}>
      <div style={{ backgroundImage: `url(${bg})` }} className="text-cent">
        <Switch>
          <Route exact path="/game" component={Game} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/cridet" component={EndGame} />

          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
