import React, { Component } from "react";
import { connect } from "react-redux";
import Game from "./Game";
import { INCREMENT, DECREMENT, RESET } from "./redux/actions/actionTypes";
import { Link } from "react-router-dom";
import credit from "./images/credit.jpg";

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
        <div >

          <center>
            <div
              className=" card  align-center border  "
              style={{ background: "rgba(255, 255, 255, 0.71)" }}
            >
              <img
                src={credit}
                className="card-img-top border border-dark "
                alt="..."
                style={{ width: "40%", height: "40%", marginTop: "10px" }}
              />

              <h4 className="card-text">Programming Team: <h5 className="card-text">
                
                  Osama and Hammam
                
              </h5></h4>
<br></br>
              <h4 className="card-text">Designe Team : <h5 className="card-text">
                
                  Hammam and Osama
                
              </h5></h4>
              <br></br>

              <h4 className="card-text">Almost lost there minds team :<h5 className="card-text">
                
                  Osama and Hammam
                
              </h5></h4>
              <br></br>

              <h4 className="card-text">special thanks :<h5 className="card-text">
                
                  Google , Github , Stackoverflow , Some Indian guy on Youtube and you
                
              </h5></h4>
              <br></br>

              <Link to="/game">
                <button
                  type="button"
                  class="btn btn-success rounded-pill btn-lg"
                  style={{ marginTop: "10px" }}
                  onClick={this.handleClick}
                >
                  Play Again
              </button>
              </Link>
            </div>


          </center>
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
export default connect(mapStateToProps, mapDispatchToProps)(EndGame);
