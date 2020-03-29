
import React, { Component } from "react";
import cart from "./images/cart.jpg"
import miniPlace from "./images/miniPlace.jpg"
import mall from "./images/mall.jpg"
import Modal from "react-responsive-modal";


export const Story1 = () => {
    return (
        <div>
            <center>
                <div class="card mb-3 border border-dark "
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "solid"
                    }}>
                    <img class="card-img-top" src={cart} alt="Card image cap"
                        style={{
                            width: "25vh",
                            height: "34vh",
                            marginLeft: "15px",
                            alignSelf: "center"
                        }}
                    />
                    <div class="card-body">
                        <h3 class="card-title">Small cart <b>BIG</b> dream ...</h3>
                        <h5 class="card-text">Well, Laila has to start somewhere</h5>
                        <h5 class="card-text">help her sell those delicious guacamole and make her buisness grow .  </h5>
                        <h5 class="card-text">And remmember if Liala want to expand her buisness Liala needs her Mama blessing *big heart emoji* </h5>
                    </div>
                </div>
            </center>
        </div>
    )
}

export const Story2 = () => {
    return (
        <div>
            <center>
                <div class="card mb-3 border border-dark "
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "solid"
                    }}>
                    <img class="card-img-top" src={miniPlace} alt="Card image cap"
                        style={{
                            width: "100%",
                            height: "100%",
                            marginLeft: "15px",
                            alignSelf: "center"
                        }}
                    />
                    <div class="card-body">
                        <h3 class="card-title">a small step for Laila a <b>BIG</b> leap for mankind</h3>
                        <h5 class="card-text">Now Laila has her place , this means one thing ...</h5>
                        <h5 class="card-text">
                            <b>
                                MORE GUACAMOLEEE !!!
            </b>
                        </h5>
                    </div>
                </div>
            </center>


        </div>
    )
}


export const Story3 = () => {
    return (
        <div>
            <center>
                <div class="card mb-3 border border-dark "
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "solid"
                    }}>
                    <img class="card-img-top" src={mall} alt="Card image cap"
                        style={{
                            width: "100%",
                            height: "100%",
                            marginLeft: "15px",
                            alignSelf: "center"
                        }}
                    />
                    <div class="card-body">
                        <h3 class="card-title">The dream came true Its the first <b>GUAC-A-MALL</b> in the World</h3>
                        <h5 class="card-text">Now is the real challenge .. </h5>
                        <h5 class="card-text">Can Laila become a millunare?! *selling guacamoles and stuff* </h5>
                    </div>

                </div>
            </center>

        </div>
    )
}








