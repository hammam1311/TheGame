import React, { Component } from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT, RESET } from "./redux/actions/actionTypes";
import Circle from "./Circle";
import EndGame from "./EndGame";
import coin from "./images/coin.png";
import Laila from "./images/Laila.png";
import mama from "./images/mama.png";
import shop from "./images/shop.png";
import Mama from "./mama";
import customers from "./Data/CustomerData";
import Shop from "./Shop";
import MamaGift from "./MamaGift";
import heart from "./images/heart.png";

let lastHole;

class Game extends Component {
  state = {
    score: this.props.score,
    holes: [0, 1, 2, 3, 4, 5],
    counter: 0
  };

  coco = () => {
    return (
      <div>
        <b>Customer name:</b>
        <p> {this.props.customers[this.state.counter].name} </p>
        <b>Order: </b>
        <p>{this.props.customers[this.state.counter].order + " Guacamoles "}</p>
        <b>Comments: </b>
        <p>{this.props.customers[this.state.counter].comments}</p>
      </div>
    );
  };

  componentDidMount() {
    this.usedHole = setInterval(() => {
      this.props.dec();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.usedHole);
  }

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
    let CustomerScore = this.props.customers[this.state.counter];
    if (this.state.counter === customers.length) {
      return <EndGame />;
    } else {
      this.props.score >= CustomerScore.order * 5
        ? (this.state.counter += 1)
        : (this.state.counter = this.state.counter);
    }

    if (this.props.time <= 0) {
      return <EndGame />;
    } else
      return (
        <div className=" container-fluid text-center row  2vh">
          <span className=" container-fluid  col-3">
            <br></br>
            0
            <img
              src={heart}
              className="card-img "
              alt="..."
              style={{
                width: "2.5vh",
                height: "2.5vh",
                marginLeft: "5px",
                alignSelf: "center"
              }}
            />
            <center>
              <img
                src={mama}
                className="card-img-fluid text- "
                alt="..."
                style={{ width: "20vh", height: "40vh", marginLeft: "5px" }}
              />
            </center>
            <Mama />
            <MamaGift />
          </span>

          <div
            className=" card col-6 align-center border-bottom-0 border-dark "
            style={{ background: "rgba(255, 255, 255, 0.71)" }}
          >
            <div className="row">
              <h4 className="text-center col" style={{ alignSelf: "center" }}>
                Time:
                <span
                  style={{
                    color: this.props.time > 10 ? "black" : "red"
                  }}
                >
                  {this.props.time} seconds
                </span>
              </h4>
              <h1 className="col" style={{ alignSelf: "left" }}>
                Guac-A-Mol
              </h1>

              <h3 className="col-sm text-center">
                {this.props.score}
                <img
                  src={coin}
                  className="card-img "
                  alt="..."
                  style={{
                    width: "2.5vh",
                    height: "2.5vh",
                    marginLeft: "5px",
                    alignSelf: "center"
                  }}
                />
              </h3>
            </div>

            <div className="container-fluid align-center">
              <center>
                <div className="row">
                  <div
                    className="card text-white bg-dark mb-3"
                    style={{ width: "30rem" }}
                  >
                    <div className="row">
                      <div className="col">
                        <div
                          className="card-body"
                          style={{ fontFamily: "Finger Paint" }}
                        >
                          <div className="card-header ">
                            <h4>
                              <b>menu :</b>
                            </h4>
                          </div>
                          <h5 className="card-text">guacamole : 5 $</h5>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="card-body"
                          style={{ fontFamily: "Finger Paint" }}
                        >
                          <div className="card-header ">
                            <h5>
                              <b>Current order:</b>
                            </h5>
                          </div>
                          <p className="card-text">
                            {this.state.counter >= customers.length
                              ? `You are Done with the orders :D`
                              : this.coco()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src={Laila}
                    className="card-img  "
                    alt="..."
                    style={{
                      width: "26vh",
                      height: "34vh",
                      marginLeft: "15px",
                      marginTop: "75px"
                    }}
                  />
                </div>

                <div
                  className="card text-white bg-white   mb-3"
                  style={{ width: "90 vh" }}
                >
                  <div className="row align-center ">
                    {this.state.holes.map(holeID => (
                      <Circle usedHole={this.randomHoles(this.state.holes)} />
                    ))}
                  </div>
                </div>
              </center>
            </div>
            <button type="button" class="btn btn-success btn-lg">
              Expand your bisness ( Cost :{" "}
            </button>
          </div>
          <span className=" container-fluid  col-3">
            <br></br>
            <img
              src={shop}
              className="card-img-fluid  "
              alt="..."
              style={{ width: "50vh", height: "45vh", marginLeft: "-15px" }}
            />
            <br></br>

            <Shop />
          </span>
          <button type="button " class="btn btn-danger btn-lg">
            End game
          </button>
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
    reset: () => dispatch({ type: RESET }),
    customers
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
