import React, { Component } from "react";
import bananaShop from "./images/bananaShop.png";
import appleShop from "./images/appleShop.png";
import wmShop from "./images/wmShop.png";
import peachShop from "./images/peachShop.png";
import pnShop from "./images/pnShop.png";
import { connect } from "react-redux";
import { decrementScore } from "./redux/actions";
const ShopUpgradeCosts = [5, 250, 500, 1000, 2000];

class Shop extends Component {
  state = {
    upgrades: {
      Apples: false,
      Banana: false,
      WaterMelon: false,
      Pineapple: false,
      peach: false
    }
  };
  componentDidMount() {}

  buyApples() {
    let points = this.props.score;
    if (points < ShopUpgradeCosts[0]) {
      alert("Not enough Coins!");
    } else if (!this.state.upgrades.Apples && points >= ShopUpgradeCosts[0]) {
      this.props.pay(ShopUpgradeCosts[0]);
      let upgrade = this.state.upgrades.Apples;
      upgrade = true;
      this.setState({
        ...this.state.upgrades,
        Apples: upgrade
      });
    }
  }

  buyBanana = () => {
    let points = this.props.score;
    if (points < ShopUpgradeCosts[1]) {
      alert("Not enough Coins!");
    } else if (!this.state.upgrades.Banana && points >= ShopUpgradeCosts[1]) {
      let upgrades = this.state.upgrades;
      upgrades.Banana = true;
      this.props.pay(ShopUpgradeCosts[1]);
      this.setState({
        upgrades: this.state.upgrades
      });
    }
  };

  buyWaterMelon = () => {
    let points = this.props.score;
    if (points < ShopUpgradeCosts[2]) {
      alert("Not enough Coins!");
    } else if (
      !this.state.upgrades.WaterMelon &&
      points >= ShopUpgradeCosts[2]
    ) {
      let upgrades = this.state.upgrades;
      upgrades.WaterMelon = true;
      this.props.pay(ShopUpgradeCosts[2]);
      this.setState({
        upgrades: upgrades
      });
    }
  };

  buyPineapple = () => {
    let points = this.props.score;
    if (points < ShopUpgradeCosts[3]) {
      alert("Not enough Coins!");
    } else if (
      !this.state.upgrades.Pineapple &&
      points >= ShopUpgradeCosts[3]
    ) {
      let upgrades = this.state.upgrades;
      upgrades.Pineapple = true;
      this.props.pay(ShopUpgradeCosts[3]);
      this.setState({
        upgrades: upgrades
      });
    }
  };

  buypeach = () => {
    let points = this.props.score;
    if (points < ShopUpgradeCosts[4]) {
      alert("Not enough Coins!");
    } else if (!this.state.upgrades.peach && points >= ShopUpgradeCosts[4]) {
      let upgrades = this.state.upgrades;
      upgrades.peach = true;
      this.props.pay(ShopUpgradeCosts[4]);
      this.setState({
        upgrades: upgrades
      });
    }
  };
  render() {
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
                      alignSelf: "center"
                    }}
                  />
                  Mounthly apples supply
                  {this.state.upgrades.Apples ? (
                    <button
                      type="button"
                      className="btn btn-info "
                      style={{ marginTop: "5px", marginLeft: "7px" }}
                      onClick={() => this.buyApples()}
                    >
                      buy {ShopUpgradeCosts[0]} $
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-info "
                      style={{ marginTop: "5px", marginLeft: "7px" }}
                      onClick={() => this.buyApples()}
                    >
                      buy {ShopUpgradeCosts[0]} $
                    </button>
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
                      alignSelf: "center"
                    }}
                  />
                  Mounthly Banana supply
                  <button
                    type="button"
                    className="btn btn-info"
                    style={{ marginTop: "5px", marginLeft: "7px" }}
                    onClick={() => this.buyBanana()}
                  >
                    buy {ShopUpgradeCosts[1]} ${" "}
                  </button>
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
                      alignSelf: "center"
                    }}
                  />
                  Mounthly Watermelon supply
                  <button
                    type="button"
                    className="btn btn-info"
                    style={{ marginTop: "5px", marginLeft: "7px" }}
                    onClick={() => this.buyWaterMelon()}
                  >
                    buy {ShopUpgradeCosts[2]} $
                  </button>
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
                      alignSelf: "center"
                    }}
                  />
                  Mounthly pineapple supply
                  <button
                    type="button"
                    className="btn btn-info"
                    style={{ marginTop: "5px", marginLeft: "7px" }}
                    onClick={() => this.buyPineapple()}
                  >
                    buy {ShopUpgradeCosts[3]} $
                  </button>
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
                      alignSelf: "center"
                    }}
                  />
                  Mounthly peach supply
                  <button
                    type="button"
                    className="btn btn-info"
                    style={{ marginTop: "5px", marginLeft: "7px" }}
                    onClick={() => this.buypeach()}
                  >
                    buy {ShopUpgradeCosts[4]} $
                  </button>
                </li>
              </center>
            </ul>
          </b>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    score: state.operationsState.score
  };
};
const mapDispatchToProps = dispatch => {
  return {
    pay: payCost => dispatch(decrementScore(payCost))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
