import React from "react";
import { Link } from "react-router-dom";
import backstory from "./images/backstory.jpg";
import Story from "./NextStory";
import award from "./award.png";

const Home = () => {
  return (
    <div>
      <div
        className="align-center text-center   "
        style={{ marginTop: "40px" }}
      >
        <img
          src={backstory}
          className="card-img-top border border-dark "
          alt="..."
          style={{ width: "75rem", marginTop: "10px" }}
          onClick={() => alert("Still waiting for the award from Aziz :(")}
        />

        <center>
          <div
            className=" card col-8 align-center border  "
            style={{ background: "rgba(255, 255, 255, 0.71)" }}
          >
            <h4 className="card-text">let me tell you about liala ..</h4>

            <p className="card-text">
              <b className="text">
                Laila and her Mama lived alone in a small town .. one day Liala
                and her mama decided to move to the city to start a tiny organic
                food buisness .
              </b>
            </p>
            <p className="card-text">
              <b className="text">
                Join Liala and her Mama in this journey and help her achive her
                dream{" "}
              </b>
            </p>
            <Link to="/game">
              <button
                type="button"
                class="btn btn-success rounded-pill btn-lg"
                style={{ marginTop: "10px" }}
              >
                Start Game
              </button>
            </Link>
          </div>
        </center>

        <h3 className="card-title">
          NOTE: DONT REFRESH YOU WILL LOSE YOUR PROGRESS
        </h3>
      </div>
    </div>
  );
};

export default Home;
