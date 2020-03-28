import React from "react";
import Mavatar from "./images/img_avatar1.png";
import Favatar from "./images/img_avatar6.png";

const CustomerCard = ({ customer }) => (
  <div
    className=" card container-fluid row  "
    style={{ width: "50%", height: "30%" }}
  >
    <div>
      {customer.sex === "m" ? (
        <img
          className="card-img-top center"
          src={Mavatar}
          alt="avatar_Char"
          style={{ width: "100px", height: "100px" }}
        />
      ) : (
        <img
          className="card-img-top center"
          src={Favatar}
          alt="avatar_Char"
          style={{ width: "100px", height: "100px" }}
        />
      )}

      <div className="card-body">
        <h4 className="card-title">{customer.name}</h4>
        <p className="card-text">
          I just want <span>{customer.order}</span> Guac A Mole please.
        </p>
        <p className="card-text">{customer.comments}</p>
      </div>
    </div>
  </div>
);

export default CustomerCard;
