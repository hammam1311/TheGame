import React, { Component } from "react";
import { connect } from "react-redux";
import { INCREMENT } from "./redux/actions/actionTypes";
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
    images: [Empty, Avocado, Guacamole]
  };

  // cococ() {
  //   if (this.props.menu === 1) {
  //     var images = this.state.images;
  //     this.setState({ images: [Empty, Avocado, Guacamole] });
  //   }
  //   if (this.props.menu === 2) {
  //     var images = this.state.images;

  //     this.setState({ images: [Empty, Apple, ApplePie] });
  //   }
  //   if (this.props.menu === 3) {
  //     this.setState({ images: [Empty, Banana, BananaIce] });
  //   }
  //   if (this.props.menu === 4) {
  //     this.setState({ images: [Empty, WaterMelon, WaterMelonIce] });
  //   }
  //   if (this.props.menu === 5) {
  //     this.setState({ images: [Empty, PineApple, PineAppleCake] });
  //   }
  //   if (this.props.menu === 6) {
  //     this.setState({ images: [Empty, Peach, Mhalabieh] });
  //   }
  // }

  handleClick = () => {
    if (this.props.menu === 1) {
      this.setState({ images: [Empty, Avocado, Guacamole] });
    }
    if (this.props.menu === 2) {
      this.setState({ images: [Empty, Apple, ApplePie] });
    }
    if (this.props.menu === 3) {
      this.setState({ images: [Empty, Banana, BananaIce] });
    }
    if (this.props.menu === 4) {
      this.setState({ images: [Empty, WaterMelon, WaterMelonIce] });
    }
    if (this.props.menu === 5) {
      this.setState({ images: [Empty, PineApple, PineAppleCake] });
    }
    if (this.props.menu === 6) {
      this.setState({ images: [Empty, Peach, Mhalabieh] });
    }
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
        <div className="mt-5 ml-3 col-4 ">
          <img
            src={
              this.state.pressed
                ? this.state.images[2]
                : this.props.usedHole === 1
                ? this.state.images[1]
                : this.state.images[0]
            }
            alt="Logo"
            width="185vh"
            height="185vh"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pressed: state.operationsState.score,
    menu: state.operationsState.menu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Increment: () => dispatch({ type: INCREMENT })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Circle);
