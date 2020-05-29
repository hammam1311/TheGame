import React, { Component } from "react";
import { connect, shallowEqual } from "react-redux";
import { increment } from "./redux/actions";
import Empty from "./images/Empty.png";

import Avocado from "./images/Avocado.png";
import Guacamole from "./images/guacamole.png";

import Apple from "./images/apple.png";
import ApplePie from "./images/applePie.png";

import Banana from "./images/bannana1.png";
import BananaIce from "./images/bananaIce.png";

import WaterMelon from "./images/waterMelon.png";
import WaterMelonIce from "./images/waterm.png";

import PineApple from "./images/pin.png";
import PineAppleCake from "./images/ppc.png";

import Peach from "./images/b.png";
import Mhalabieh from "./images/Mhalabieh.png";

class Circle extends Component {
  state = {
    pressed: false,
    i: this.props.menu - 1,
    images: [Empty, Avocado, Guacamole, 5],
    images2: [
      [Empty, Avocado, Guacamole, 5],
      [Empty, Apple, ApplePie, 10],
      [Empty, Banana, BananaIce, 15],
      [Empty, WaterMelon, WaterMelonIce, 20],
      [Empty, PineApple, PineAppleCake, 25],
      [Empty, Peach, Mhalabieh, 30],
    ],
  };

  componentDidMount() {
    setInterval(() => {
      if (
        this.state.i >= this.state.images2.length - 1 ||
        this.state.i >= this.props.menu - 1
      )
        this.setState({ i: 0 });
      else {
        this.state.i += 1;
      }
    }, 5000);
  }
  handleClick = () => {
    if (this.props.menu === 1) {
      this.setState({ images: [Empty, Avocado, Guacamole, 5] });
    }
    if (this.props.menu === 2) {
      this.setState({ images: [Empty, Apple, ApplePie, 10] });
    }
    if (this.props.menu === 3) {
      this.setState({ images: [Empty, Banana, BananaIce, 15] });
    }
    if (this.props.menu === 4) {
      this.setState({ images: [Empty, WaterMelon, WaterMelonIce, 20] });
    }
    if (this.props.menu === 5) {
      this.setState({ images: [Empty, PineApple, PineAppleCake, 25] });
    }
    if (this.props.menu === 6) {
      this.setState({ images: [Empty, Peach, Mhalabieh, 30] });
    }
    if (this.props.usedHole === 1) {
      this.props.increment(+this.state.images[3]);
      this.setState({ pressed: true });

      setTimeout(() => {
        this.setState({ pressed: false });
      }, 1000);
    }
  };

  render() {
    return (
      <div>
        <div className="mt-5 ml-3 col-4 ">
          <img
            src={
              this.state.pressed
                ? this.state.images2[this.state.i][2]
                : this.props.usedHole === 1
                ? this.state.images2[this.state.i][1]
                : this.state.images[0]
            }
            alt="Logo"
            width="130vh"
            height="130vh"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pressed: state.operationsState.score,
    menu: state.operationsState.menu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (inc) => dispatch(increment(inc)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Circle);
