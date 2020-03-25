import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="align-center text-center " style={{ marginTop: "40px" }}>
        <h1>Guac-A-Mole</h1>
        <h3>Make the fastest and the most delicious guacamole!</h3>
        <Link to="/game">
          <button
            type="button"
            class="btn btn-success rounded-pill btn-lg"
            style={{ marginTop: "40px" }}
          >
            Start Game
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
