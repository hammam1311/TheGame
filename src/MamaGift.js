import React, { Component } from "react";
import { connect } from "react-redux";
import { decrementScore, incrementHeart } from "./redux/actions";
import Fawaz from "./images/Fawaz.png";
import flower from "./images/flower.png";
import car from "./images/car.png";
import pet from "./images/pet.png";
import ring from "./images/ring.png";
import heart from "./images/heart.png";

const ShopForGifts = [25, 175, 1800, 3750, 9999];
const HeartPlus = [5, 35, 360, 750, 2000];

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
      let gifts = this.state.gifts;
      this.props.pay(ShopForGifts[0]);
      this.props.HeartInc(HeartPlus[0]);
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
      let gifts = this.state.gifts;
      gifts.ring = true;
      this.props.pay(ShopForGifts[1]);
      this.props.HeartInc(HeartPlus[1]);

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
      let gifts = this.state.gifts;
      this.props.pay(ShopForGifts[2]);
      this.props.HeartInc(HeartPlus[2]);

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
      let gifts = this.state.gifts;
      this.props.pay(ShopForGifts[3]);
      this.props.HeartInc(HeartPlus[3]);

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
      let gifts = this.state.gifts;
      this.props.pay(ShopForGifts[4]);
      this.props.HeartInc(HeartPlus[4]);

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
                  <img
                    src={heart}
                    className="card-img "
                    alt="..."
                    style={{
                      width: "3vh",
                      height: "3vh",
                      marginLeft: "15px",
                      alignSelf: "right"
                    }}
                  />
                  {HeartPlus[0]}
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
                  <img
                    src={heart}
                    className="card-img "
                    alt="..."
                    style={{
                      width: "3vh",
                      height: "3vh",
                      marginLeft: "15px",
                      alignSelf: "right"
                    }}
                  />
                  {HeartPlus[1]}
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
                  <img
                    src={heart}
                    className="card-img "
                    alt="..."
                    style={{
                      width: "3vh",
                      height: "3vh",
                      marginLeft: "15px",
                      alignSelf: "right"
                    }}
                  />
                  {HeartPlus[2]}
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
                  <img
                    src={heart}
                    className="card-img "
                    alt="..."
                    style={{
                      width: "3vh",
                      height: "3vh",
                      marginLeft: "15px",
                      alignSelf: "right"
                    }}
                  />
                  {HeartPlus[3]}
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
                  <img
                    src={heart}
                    className="card-img "
                    alt="..."
                    style={{
                      width: "3vh",
                      height: "3vh",
                      marginLeft: "15px",
                      alignSelf: "right"
                    }}
                  />
                  {HeartPlus[4]}
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
    score: state.operationsState.score,
    heart: state.operationsState.heart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pay: payCost => dispatch(decrementScore(payCost)),
    HeartInc: HeartInc => dispatch(incrementHeart(HeartInc))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MamaGift);
