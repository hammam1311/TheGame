import React, { Component } from "react";
import { connect } from "react-redux";
import Circle from "./Circle";
import EndGame from "./EndGame";
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
        <div className="text-center">
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

          <h4>Score:{this.props.score}</h4>
          <div className="container mr-5 mt-5">
            <div className="row " style={{ marginLeft: "30px" }}>
              <Circle
                usedHole={this.randomHoles(this.state.holes)}
                score={() => this.IncreaseScore}
              />
              <Circle
                usedHole={this.randomHoles(this.state.holes)}
                score={() => this.IncreaseScore}
              />{" "}
              <Circle
                usedHole={this.randomHoles(this.state.holes)}
                score={() => this.IncreaseScore}
              />
            </div>
            <div className="row" style={{ marginLeft: "100px" }}>
              <Circle
                usedHole={this.randomHoles(this.state.holes)}
                score={() => this.IncreaseScore}
              />{" "}
              <Circle
                usedHole={this.randomHoles(this.state.holes)}
                score={() => this.IncreaseScore}
              />
            </div>
          </div>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    score: state.score,
    time: state.time
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Increment: () => dispatch({ type: "INCREMENT" }),
    dec: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
