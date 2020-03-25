import React, { Component } from "react";
import { connect } from "react-redux";

class Game extends Component {
  componentDidMount() {
    this.x = setInterval(() => {
      this.props.dec();
    }, 1000);
  }

  render() {
    if (this.props.time <= 0) {
      return (
        <div>
          <h2>Game Over</h2>
        </div>
      );
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
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    time: state.time
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Increment: () => dispatch({ type: "INCREMENT" }),
    dec: () => dispatch({ type: "DECREMENT" })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
