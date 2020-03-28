import React, { Component } from "react";
import { connect } from "react-redux";
import Fawaz from "./images/Fawaz.png";
import flower from "./images/flower.png";
import car from "./images/car.png";
import pet from "./images/pet.png";
import ring from "./images/ring.png";
import { decrementScore } from "./redux/actions";

const ShopForGifts = [25, 175, 1800, 3750, 9999];

class MamaGift extends Component {
  state = {
    gifts: {
      flower: false,
      ring: false,
      car: false,
      giraffe: false,
      alien: false
    }
  };

  buyflower() {
    let points = this.props.score;
    if (points < ShopForGifts[0]) {
      alert("Not enough Coins!");
    } else if (!this.state.gifts.flower && points >= ShopForGifts[0]) {
      alert("HELOO");
      let gifts = this.state.gifts;
      gifts.flower = true;
      this.props.pay(ShopForGifts[0]);
      this.setState({
        gifts: gifts
      });
    }
  }

  buyRing() {
    let points = this.props.score;
    if (points < ShopForGifts[1]) {
      alert("Not enough Coins!");
    } else if (!this.state.gifts.ring && points >= ShopForGifts[1]) {
      alert("HELOO");
      let gifts = this.state.gifts;
      gifts.ring = true;
      this.props.pay(ShopForGifts[1]);

      this.setState({
        gifts: gifts
      });
    }
  }
  buyCar() {
    let points = this.props.score;
    if (points < ShopForGifts[2]) {
      alert("Not enough Coins!");
    } else if (!this.state.gifts.car && points >= ShopForGifts[2]) {
      alert("HELOO");
      let gifts = this.state.gifts;
      gifts.car = true;
      this.props.pay(ShopForGifts[2]);

      this.setState({
        gifts: gifts
      });
    }
  }
  buyGiraffe() {
    let points = this.props.score;
    if (points < ShopForGifts[3]) {
      alert("Not enough Coins!");
    } else if (!this.state.gifts.giraf && points >= ShopForGifts[3]) {
      alert("HELOO");
      let gifts = this.state.gifts;
      gifts.giraffe = true;
      this.props.pay(ShopForGifts[3]);

      this.setState({
        gifts: gifts
      });
    }
  }
  buyAlien() {
    let points = this.props.score;
    if (points < ShopForGifts[4]) {
      alert("Not enough Coins!");
    } else if (!this.state.gifts.alien && points >= ShopForGifts[4]) {
      alert("HELOO");
      let gifts = this.state.gifts;
      gifts.alien = true;
      this.props.pay(ShopForGifts[4]);

      this.setState({
        gifts: gifts
      });
    }
  }
  render() {
    return (
      <div>
        <div className="card">
          <center>
            <div className="card-header">Gift Mama</div>
          </center>
          <b>
            <ul className="list-group list-group-flush">
              <center>
                <li className="list-group-item">
                  <img
                    src={flower}
                    className="card-img "
                    alt="..."
                    style={{
                      width: "5vh",
                      height: "5vh",
                      marginRight: "5px",
                      alignSelf: "center"
                    }}
                  />
                  Flowers
                  <button
                    type="button"
                    className="btn btn-info"
                    style={{ marginTop: "5px", marginLeft: "7px" }}
                    onClick={() => this.buyflower()}
                  >
                    buy {ShopForGifts[0]} $
                  </button>
                </li>

                <li className="list-group-item">
                  <img
                    src={ring}
                    className="card-img "
                    alt="..."
                    style={{
                      width: "5vh",
                      height: "5vh",
                      marginRight: "5px",
                      alignSelf: "center"
                    }}
                  />
                  A Nice Ring
                  <button
                    type="button"
                    className="btn btn-info"
                    style={{ marginTop: "5px", marginLeft: "7px" }}
                    onClick={() => this.buyRing()}
                  >
                    buy {ShopForGifts[1]} $
                  </button>
                </li>

                <li className="list-group-item">
                  <img
                    src={car}
                    className="card-img "
                    alt="..."
                    style={{
                      width: "5.5vh",
                      height: "4vh",
                      marginRight: "5px",
                      alignSelf: "center"
                    }}
                  />
                  A Small Car
                  <button
                    type="button"
                    className="btn btn-info"
                    style={{ marginTop: "5px", marginLeft: "7px" }}
                    onClick={() => this.buyCar()}
                  >
                    buy {ShopForGifts[2]} ${" "}
                  </button>
                </li>

                <li className="list-group-item">
                  <img
                    src={pet}
                    className="card-img "
                    alt="..."
                    style={{
                      width: "6vh",
                      height: "6vh",
                      marginRight: "5px",
                      alignSelf: "center"
                    }}
                  />
                  A Pet Giraffe
                  <button
                    type="button"
                    className="btn btn-info"
                    style={{ marginTop: "5px", marginLeft: "7px" }}
                    onClick={() => this.buyGiraffe()}
                  >
                    buy {ShopForGifts[3]} $
                  </button>
                </li>
                <li className="list-group-item">
                  <img
                    src={Fawaz}
                    className="card-img "
                    alt="..."
                    style={{
                      width: "5vh",
                      height: "5vh",
                      marginRight: "5px",
                      alignSelf: "center"
                    }}
                  />
                  An Alien Friend
                  <button
                    type="button"
                    className="btn btn-info"
                    style={{ marginTop: "5px", marginLeft: "7px" }}
                    onClick={() => this.buyAlien()}
                  >
                    buy {ShopForGifts[4]} $
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

export default connect(mapStateToProps, mapDispatchToProps)(MamaGift);
