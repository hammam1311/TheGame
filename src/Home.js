import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (

    <div>
      <div className="align-center text-center " style={{ marginTop: "40px" }}>
        <img src="https://images.squarespace-cdn.com/content/5a1c5ef4914e6b0913340490/1512002489057-APICYUNCIAQE5NS5OC7T/0.png?content-type=image%2Fpng"
          className="card-img-top"
          alt="..."
          style={{ width: "70rem", height: "30rem" }} />
        <div className="card-body">
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
        </div>
      </div>
    </div>

  );
};

export default Home;
