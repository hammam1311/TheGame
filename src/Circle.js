import React, { Component } from "react";
import Avocado from "./images/Avocado.png";
import Empty from "./images/Empty.png";
import Guacamole from "./images/guacamole.png";
import { connect } from "react-redux";
class Circle extends Component {
  state = {
    pressed: false
  };

  handleClick = () => {
    if (this.props.usedHole === 1) {
      this.props.Increment();
      this.setState({ pressed: true });

      setTimeout(() => {
        this.setState({ pressed: false });
      }, 1000);
    }
  };

  render() {
    return (
      <div >
        <div>
          <img
            src={
              this.state.pressed
                ? Guacamole
                : this.props.usedHole === 1
                  ? Avocado
                  : Empty
            }
            alt="Logo"
            width="200"
            height="180"
            onClick={this.handleClick}
            className="img-fluid mx-auto"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pressed: state.score
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Increment: () => dispatch({ type: "INCREMENT" })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Circle);
