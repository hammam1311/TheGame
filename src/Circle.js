import React, { Component } from "react";
import Avocado from "./images/Avocado.png";
import Empty from "./images/Empty.png";
import Guacamole from "./images/guacamole.png";
import { connect } from "react-redux";
import { INCREMENT } from "./redux/actions/actionTypes";

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
      <div>
        <div className="mt-5 ml-4 ">
          <img
            src={
              this.state.pressed
                ? Guacamole
                : this.props.usedHole === 1
                ? Avocado
                : Empty
            }
            alt="Logo"
            width="150"
            height="130"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pressed: state.operationsState.score
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Increment: () => dispatch({ type: INCREMENT })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Circle);
