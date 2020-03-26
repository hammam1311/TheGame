import React, { Component } from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT, RESET } from "./redux/actions/actionTypes";
import Circle from "./Circle";
import EndGame from "./EndGame";
import coin from "./images/coin.jpg";
import Laila from "./images/Laila.png";
import mama from "./images/mama.png";
import mama_mad from "./images/mama_mad.png";

import shop from "./images/shop.png";
import Mama from "./mama";
import Shop from "./images/shop.jpg";

import Mama_Ayshih from "./images/Mama_Ayshih.png";
let lastHole;

class Game extends Component {
  state = {
    holes: [0, 1, 2, 3, 4]
  };

  componentDidMount() {
    this.usedHole = setInterval(() => {
      this.props.dec();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.usedHole);
  }
  IncreaseScore = () => {
    let newScore = this.state.score + 5;
    this.setState({ score: newScore });
  }; //End of the Inc function

  randomHoles() {
    const index = Math.floor(Math.random() * this.state.holes.length);
    const hole = this.state.holes[index];
    if (hole === lastHole) {
      console.log("Tekraaar");
      return this.randomHoles(this.state.holes);
    } //End of the if statement
    lastHole = hole;

    return hole;
  } //End of the randomHoles function

  render() {
    if (this.props.time <= 0) {
      return <EndGame />;
    } else
      return (
        <div className=" container-fluid text-center row  2vh">
          <span className=" container-fluid border border-dark col-3">

            <br></br>

            <img
              src={mama}
              className="card-img-fluid "
              alt="..."
              style={{ width: "20vh", height: "40vh", marginLeft: "5px" }}


            />
            <Mama />

          </span>
          <div className=" card col-6 align-center border border-dark "
            style={{ background: "rgba(255, 255, 255, 0.71)" }}>
            <h1>Guac-A-Mole</h1>
            <h4>
              Time:
              <span
                style={{
                  color: this.props.time > 10 ? "black" : "red"
                }}
              >
                {this.props.time} seconds
              </span>
            </h4>

            <h3 className="col-sm align-center text-center">
              {this.props.score}
              <img
                src={coin}
                className="card-img col-6-sm "
                alt="..."
                style={{ width: "2.5vh", height: "2.5vh", marginLeft: "5px" }}
              />
            </h3>

            <div className="container-fluid align-center">
              <center>
                <img
                  src={Laila}
                  className="card-img col-6-sm "
                  alt="..."
                  style={{ width: "26vh", height: "34vh", marginLeft: "5px" }}
                />

                <div
                  className="card text-white bg-white  mb-3"
                  style={{ width: "72vh" }}
                >
                  <div className="row align-center ">
                    {this.state.holes.map(holeID => (
                      <Circle
                        usedHole={this.randomHoles(this.state.holes)}
                        score={() => this.IncreaseScore}
                      />
                    ))}
                  </div>
                </div>
              </center>
            </div>
          </div>
          <span className=" container-fluid border border-dark col-3">
            <br></br>
            <img
              src={shop}
              className="card-img-fluid "
              alt="..."
              style={{ width: "50vh", height: "45vh", marginLeft: "5px" }}

            />
            <br></br>
          </span>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    score: state.operationsState.score,
    time: state.operationsState.time
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Increment: () => dispatch({ type: INCREMENT }),
    dec: () => dispatch({ type: DECREMENT }),
    reset: () => dispatch({ type: RESET })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
