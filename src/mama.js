import React from "react";
import text from "./images/text.gif";
import logo from "./images/logo.jpg";
import mama from "./Data/Mama";
import { connect } from "react-redux";
function Mama() {
  return (
    <div
      className="card container-fluid  text-black"
      style={{ background: "rgba(255, 255, 255, 0.71)" }}
    >
      <h5 className="card-title flout-laft container-fluid">
        <img
          className="card-img "
          src={logo}
          alt="WhatsApp Logo"
          style={{ width: "3rem", height: "3rem", marginLeft: "5px" }}
        />
        Mama:
        <p className="card-text ">
          {mama[3]}
          <img
            className="img rounded-circle"
            src={text}
            alt="Checked"
            style={{ width: "2rem", height: "2rem", marginLeft: "5px" }}
          />
        </p>
      </h5>
    </div>
  );
}

export default Mama;
