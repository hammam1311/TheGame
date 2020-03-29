import React from "react";
import end1 from "./images/end1.jpg"
import end2 from "./images/end2.jpg"
import end3 from "./images/end3.gif"

function Test() {
    return (
        <div>
            <center>
                <div class="card mb-3 border border-dark "
                    style={{
                        width: "65%",
                        height: "65%",
                        border: "solid"
                    }}>
                    <img class="card-img-top" src={end1} alt="Card image cap"
                        style={{
                            width: "50%",
                            height: "50%",
                            marginLeft: "15px",
                            alignSelf: "center"
                        }}
                    />
                    <div class="card-body">
                        <h3 class="card-title">Small but ..</h3>
                        <h5 class="card-text">Even tho Its only a small cart , it was the favorate to people in her neborhood </h5>
                        <h5 class="card-text">They even sang songs about it ... Nice Work </h5>
                    </div>
                    <button type="button" class="btn btn-success btn-lg"> Cridet </button>
                </div>
            </center>

            <center>
                <div class="card mb-3 border border-dark "
                    style={{
                        width: "65%",
                        height: "65%",
                        border: "solid"
                    }}>
                    <img class="card-img-top" src={end2} alt="Card image cap"
                        style={{
                            width: "50%",
                            height: "50%",
                            marginLeft: "15px",
                            alignSelf: "center"
                        }}
                    />
                    <div class="card-body">
                        <h3 class="card-title">Hard work pays off ..</h3>
                        <h5 class="card-text">One years passed the opening of Lailas new place .. </h5>
                        <h5 class="card-text">She got the award of <b>"best place for organic stuff"</b> in the city ... Good Job !!</h5>
                    </div>
                    <button type="button" class="btn btn-success btn-lg"> Cridet </button>
                </div>
            </center>

            <center>
                <div class="card mb-3 border border-dark "
                    style={{
                        width: "65%",
                        height: "65%",
                        border: "solid"
                    }}>
                    <img class="card-img-top" src={end3} alt="Card image cap"
                        style={{
                            width: "50%",
                            height: "50%",
                            marginLeft: "15px",
                            alignSelf: "center"
                        }}
                    />
                    <div class="card-body">
                        <h3 class="card-title">heres come the MONEY!!</h3>
                        <h5 class="card-text">Now that Liala has so much money , she wonders what to do with it.. </h5>
                        <h5 class="card-text">She desided to open another Guac-A-Mall .. and another one and another one ...etc ... Its Over You Win :)</h5>
                    </div>
                    <button type="button" class="btn btn-success btn-lg"> Cridet </button>
                </div>
            </center>
        </div>
    )
}
export default Test;
