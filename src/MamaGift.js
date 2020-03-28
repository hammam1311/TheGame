import React from "react"
import Fawaz from "./images/Fawaz.png"
import flower from "./images/flower.png"
import car from "./images/car.png"
import pet from "./images/pet.png"
import ring from "./images/ring.png"

function MamaGift() {
    return (
        <div>
            <div class="card" >
                <center>


                    <div class="card-header">
                        Gift Mama
                      </div>
                </center>
                <b>


                    <ul class="list-group list-group-flush">
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
                  <button type="button" className="btn btn-info" style={{ marginTop: "5px", marginLeft: "7px" }}>
                                    buy (25$)
                    </button>
                            </li>


                            <li className="list-group-item" >
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
                      <button type="button" className="btn btn-info" style={{ marginTop: "5px", marginLeft: "7px" }}>
                                    buy (175$)
                        </button>
                            </li>


                            <li className="list-group-item" >
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
                      <button type="button" className="btn btn-info" style={{ marginTop: "5px", marginLeft: "7px" }}
                                >buy (1800$)
                      </button>
                            </li>


                            <li className="list-group-item" >
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
                     <button type="button" className="btn btn-info" style={{ marginTop: "5px", marginLeft: "7px" }}
                                >buy (3750$)
                     </button>
                            </li>
                            <li className="list-group-item" >
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
                     <button type="button" className="btn btn-info" style={{ marginTop: "5px", marginLeft: "7px" }}
                                >buy (9999$)
                     </button>
                            </li>


                        </center>

                    </ul>
                </b>

            </div>


        </div>);

}
export default MamaGift