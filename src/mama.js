import React, { Component } from "react";
import text from "./images/text.gif";
import logo from "./images/logo.jpg";
import mama from "./Data/Mama";
import { connect } from "react-redux";
class Mama extends Component {
  state = {
    counter: 1,
    score: this.props.score
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.counter <= mama.length) this.state.counter += 1;
      else {
        this.setState({ counter: 1 });
      }
    }, 5000);
  }
  render() {
    // We are taking the score each time it increse

    return (
      <div
        className="card container-fluid  text-black"
        style={{ background: "rgba(255, 255, 255, 0.71)" }}
      >
        <h5 className="card-title flout-laft container-fluid">
          <img
            className="card-img "
            src={logo}
            alt="WhatsApp Logo"
            style={{ width: "3rem", height: "3rem", marginLeft: "5px" }}
          />
          Mama:
          <p className="card-text ">
            {mama[this.state.counter]}
            <img
              className="img rounded-circle"
              src={text}
              alt="Checked"
              style={{ width: "2rem", height: "2rem", marginLeft: "5px" }}
            />
          </p>
        </h5>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    score: state.operationsState.score
  };
};

export default connect(mapStateToProps)(Mama);
