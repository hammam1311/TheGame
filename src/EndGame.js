import React, { Component } from "react";
import { connect } from "react-redux";
import Game from "./Game";
class EndGame extends Component {
  state = {
    reset: false
  };

  handleClick = () => {
    this.setState({ reset: true });
  };
  render() {
    if (this.state.reset) {
      this.props.reset();
      return <Game />;
    } else
      return (
        <div
          style={{
            marginTop: "200px",
            backgroundColor: "white",
            display: "inline-block",
            padding: "100px",
            borderRadius: "20px"
          }}
        >
          <h1>Game Over</h1>
          <h4>Your Score:{this.props.score}</h4>
          <button
            onClick={this.handleClick}
            type="button"
            className="btn btn-primary rounded-pill btn-lg"
            style={{ marginTop: "40px" }}
          >
            Play Again
          </button>
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
export default connect(mapStateToProps, mapDispatchToProps)(EndGame);
