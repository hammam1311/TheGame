import React from "react";
import bananaShop from "./images/bananaShop.png"
import appleShop from "./images/appleShop.png"
import wmShop from "./images/wmShop.png"
import peachShop from "./images/peachShop.png"
import pnShop from "./images/pnShop.png"

function Shop(props) {
  const ShopUpgradeCosts = [100, 250, 500, 1000, 2000]
  const upgrades =
  {
    Appels: false,
    Banana: false,
    WaterMelon: false,
    Pineapple: false,
    peach: false
  }
  const score = props.score

  const buyAppels = () => {
    let points = score;
    if (points < ShopUpgradeCosts[0]) {
      alert("Not enough Coins!");
    } else if (
      !upgrades.Appels &&
      points >= ShopUpgradeCosts[0]
    ) {
      let upgrades = upgrades;
      upgrades.Apples = true;
      setState({
        upgrades: upgrades,
        storePoints: props.score - ShopUpgradeCosts[0]
      });
    }
  }

  const buyBanana = () => {
    let points = score;
    if (points < ShopUpgradeCosts[1]) {
      alert("Not enough Coins!");
    } else if (
      !upgrades.Banana &&
      points >= ShopUpgradeCosts[1]
    ) {
      let upgrades = upgrades;
      upgrades.Banana = true;
      setState({
        upgrades: upgrades,
        storePoints: props.score - ShopUpgradeCosts[1]
      });
    }
  }

  const buyWaterMelon = () => {
    let points = score;
    if (points < ShopUpgradeCosts[2]) {
      alert("Not enough Coins!");
    } else if (
      !upgrades.WaterMelon &&
      points >= ShopUpgradeCosts[2]
    ) {
      let upgrades = upgrades;
      upgrades.WaterMelon = true;
      setState({
        upgrades: upgrades,
        storePoints: props.score - ShopUpgradeCosts[2]
      });
    }
  }

  const buyPineapple = () => {
    let points = score;
    if (points < ShopUpgradeCosts[3]) {
      alert("Not enough Coins!");
    } else if (
      !upgrades.Pineapple &&
      points >= ShopUpgradeCosts[3]
    ) {
      let upgrades = upgrades;
      upgrades.Pineapple = true;
      setState({
        upgrades: upgrades,
        score: props.score - ShopUpgradeCosts[3]
      });
    }
  }

  const buypeach = () => {
    let points = score;
    if (points < ShopUpgradeCosts[4]) {
      alert("Not enough Coins!");
    } else if (
      !upgrades.peach &&
      points >= ShopUpgradeCosts[4]
    ) {
      let upgrades = upgrades;
      upgrades.peach = true;
      setState({
        upgrades: upgrades,
        storePoints: props.score - ShopUpgradeCosts[4]
      });
    }
  }
  return (<div>
    <div class="card" >
      <div class="card-header">
        Subsecriptions
              </div>
      <b>


        <ul class="list-group list-group-flush">
          <center>

            <li className="list-group-item">
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
          <button type="button" className="btn btn-info" style={{ marginTop: "5px", marginLeft: "7px" }}>
                buy 100$
            </button>
            </li>


            <li className="list-group-item" >
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
              <button type="button" className="btn btn-info" style={{ marginTop: "5px", marginLeft: "7px" }}>
                buy 250$
                </button>
            </li>


            <li className="list-group-item" >
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
              <button type="button" className="btn btn-info" style={{ marginTop: "5px", marginLeft: "7px" }}
              >buy 500$
              </button>
            </li>


            <li className="list-group-item" >
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
             <button type="button" className="btn btn-info" style={{ marginTop: "5px", marginLeft: "7px" }}
              >buy 1000$
             </button>
            </li>
            <li className="list-group-item" >
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
             <button type="button" className="btn btn-info" style={{ marginTop: "5px", marginLeft: "7px" }}
              >buy 2000$
             </button>
            </li>


          </center>

        </ul>
      </b>

    </div>


  </div>);
}

export default Shop;
