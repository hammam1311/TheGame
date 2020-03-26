import React from "react";
import { Link } from "react-router-dom";
import mama from "./mama"
import backstory from "./images/backstory.jpg"

const Home = () => {
  return (

    <div>
      <div className="align-center text-center   " style={{ marginTop: "40px" }}>
        <img src={backstory}
          className="card-img-top border border-dark "
          alt="..."
          style={{ width: "70rem", height: "35rem", marginTop: "40px" }} />
        <div className="card-body ">
          <h3 className="card-title">Guac-A-Mole</h3>
          <h4 className="card-text">Make the Fastest and the most delicious guacamole!</h4>
          <br></br>
          <p className="card-text"><b className="text">What did the avocado say to the fork? “You guac my world.”</b></p>
          <p className="card-text"><b className="text">What’s an avocado’s favorite kind of exercise? Avocardio!</b></p>
          <Link to="/game">
            <button
              type="button"
              class="btn btn-success rounded-pill btn-lg"
              style={{ marginTop: "40px" }}
            >
              Start Game
       </button>
          </Link>
          {mama}
        </div>
      </div>
    </div>

  );
};

export default Home;
