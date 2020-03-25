import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="align-center text-center">
        <h1>Guac-A-Mole</h1>
        <h3>Make the fastest and the most delicious guacamole!</h3>
        <Link to="/game">
          <button type="button" className="btn btn-success">
            Start Game
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
