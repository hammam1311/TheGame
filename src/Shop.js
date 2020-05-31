import React, { Component } from "react";
import bananaShop from "./images/bananaShop.png";
import appleShop from "./images/appleShop.png";
import wmShop from "./images/wmShop.png";
import peachShop from "./images/peachShop.png";
import pnShop from "./images/pnShop.png";
import { connect } from "react-redux";
import { INCREMENT_MENU } from "./redux/actions/actionTypes";

import { decrementScore, IncMenu } from "./redux/actions";
const ShopUpgradeCosts = [50, 150, 450, 1000, 1850];

class Shop extends Component {
  state = {
    Apples: false,
    Banana: false,
    WaterMelon: false,
    Pineapple: false,
    peach: false,
  };

  buyApples() {
    let points = this.props.score;
    if (points < ShopUpgradeCosts[0]) {
      alert("Not enough Coins!");
    } else if (!this.state.Apples && points >= ShopUpgradeCosts[0]) {
      this.props.pay(ShopUpgradeCosts[0]);
      this.props.IncMenu();
      let upgrade = this.state.Apples;
      upgrade = true;
      let state = this.state;
      this.setState({
        ...state,
        Apples: upgrade,
      });
    }
  }

  buyBanana() {
    let points = this.props.score;
    if (points < ShopUpgradeCosts[1]) {
      alert("Not enough Coins!");
    } else if (!this.state.Banana && points >= ShopUpgradeCosts[0]) {
      this.props.pay(ShopUpgradeCosts[1]);
      this.props.IncMenu();
      let upgrade = this.state.Banana;
      upgrade = true;
      let state = this.state;
      this.setState({
        ...state,
        Banana: upgrade,
      });
    }
  }

  buyWaterMelon() {
    let points = this.props.score;
    if (points < ShopUpgradeCosts[2]) {
      alert("Not enough Coins!");
    } else if (!this.state.WaterMelon && points >= ShopUpgradeCosts[0]) {
      this.props.pay(ShopUpgradeCosts[2]);
      this.props.IncMenu();

      let upgrade = this.state.WaterMelon;
      upgrade = true;
      let state = this.state;
      this.setState({
        ...state,
        WaterMelon: upgrade,
      });
    }
  }
  buyPineapple() {
    let points = this.props.score;
    if (points < ShopUpgradeCosts[3]) {
      alert("Not enough Coins!");
    } else if (!this.state.Pineapple && points >= ShopUpgradeCosts[0]) {
      this.props.pay(ShopUpgradeCosts[3]);
      this.props.IncMenu();

      let upgrade = this.state.Pineapple;
      upgrade = true;
      let state = this.state;
      this.setState({
        ...state,
        Pineapple: upgrade,
      });
    }
  }

  buypeach() {
    let points = this.props.score;
    if (points < ShopUpgradeCosts[4]) {
      alert("Not enough Coins!");
    } else if (!this.state.peach && points >= ShopUpgradeCosts[0]) {
      this.props.pay(ShopUpgradeCosts[4]);
      this.props.IncMenu();

      let upgrade = this.state.peach;
      upgrade = true;
      let state = this.state;
      this.setState({
        ...state,
        peach: upgrade,
      });
    }
  }
  render() {
    const renderer = () => {};
    return (
      <div>
        <div className="card">
          <div className="card-header">Subsecriptions</div>
          <b>
            <ul className="list-group list-group-flush">
              <center>
                <li className="list-group-item ">
                  <img
                    src={appleShop}
                    className="card-img "
                    alt="..."
                    style={{
                      width: "3.5vh",
                      height: "4vh",
                      marginRight: "5px",
                      alignSelf: "center",
                    }}
                  />
                  Monthly apples supply
                  {!this.state.Apples ? (
                    <button
                      type="button"
                      className="btn btn-info"
                      style={{ marginTop: "5px", marginLeft: "7px" }}
                      onClick={() => this.buyApples(this.props)}
                    >
                      buy {ShopUpgradeCosts[0]} $
                    </button>
                  ) : (
                    <br></br>
                  )}
                </li>

                <li className="list-group-item">
                  <img
                    src={bananaShop}
                    className="card-img "
                    alt="..."
                    style={{
                      width: "3.5vh",
                      height: "4vh",
                      marginRight: "5px",
                      alignSelf: "center",
                    }}
                  />
                  Monthly Banana supply
                  {!this.state.Banana ? (
                    <button
                      type="button"
                      className="btn btn-info"
                      style={{ marginTop: "5px", marginLeft: "7px" }}
                      onClick={() => this.buyBanana(this.props)}
                    >
                      buy {ShopUpgradeCosts[1]} $
                    </button>
                  ) : (
                    <br></br>
                  )}
                </li>

                <li className="list-group-item">
                  <img
                    src={wmShop}
                    className="card-img "
                    alt="..."
                    style={{
                      width: "4vh",
                      height: "4vh",
                      marginRight: "5px",
                      alignSelf: "center",
                    }}
                  />
                  Monthly Watermelon supply
                  {!this.state.WaterMelon ? (
                    <button
                      type="button"
                      className="btn btn-info"
                      style={{ marginTop: "5px", marginLeft: "7px" }}
                      onClick={() => this.buyWaterMelon(this.props)}
                    >
                      buy {ShopUpgradeCosts[2]} $
                    </button>
                  ) : (
                    <br></br>
                  )}
                </li>

                <li className="list-group-item">
                  <img
                    src={pnShop}
                    className="card-img "
                    alt="..."
                    style={{
                      width: "6vh",
                      height: "6vh",
                      marginRight: "5px",
                      alignSelf: "center",
                    }}
                  />
                  Monthly pineapple supply
                  {!this.state.Pineapple ? (
                    <button
                      type="button"
                      className="btn btn-info"
                      style={{ marginTop: "5px", marginLeft: "7px" }}
                      onClick={() => this.buyPineapple(this.props)}
                    >
                      buy {ShopUpgradeCosts[3]} $
                    </button>
                  ) : (
                    <br></br>
                  )}
                </li>
                <li className="list-group-item">
                  <img
                    src={peachShop}
                    className="card-img "
                    alt="..."
                    style={{
                      width: "5vh",
                      height: "4vh",
                      marginRight: "5px",
                      alignSelf: "center",
                    }}
                  />
                  Monthly peach supply
                  {!this.state.peach ? (
                    <button
                      type="button"
                      className="btn btn-info"
                      style={{ marginTop: "5px", marginLeft: "7px" }}
                      onClick={() => this.buypeach(this.props)}
                    >
                      buy {ShopUpgradeCosts[4]} $
                    </button>
                  ) : (
                    <br></br>
                  )}
                </li>
              </center>
            </ul>
          </b>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.operationsState.score,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    pay: (payCost) => dispatch(decrementScore(payCost)),
    IncMenu: () => dispatch({ type: INCREMENT_MENU }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
