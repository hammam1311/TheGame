import React from "react"
import text from "./images/text.gif"
import logo from "./images/logo.jpg"


function mama() {
    return (
        <div className="container-fluid mt-10">
            <div className="card bg-graan text-black"
            >
                <img className="card-img " src={logo} alt="Card image" />
                <div className="card-img-overlay">
                    <h5 className="card-title">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h5>
                    <p className="card-text">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                     <img className="img rounded-circle" src={text} alt="Card image"
                            style={{ width: "2rem", height: "2rem", marginLeft: "5px" }}

                        />
                    </p>
                </div>
            </div>
        </div>

    )
}
export default mama