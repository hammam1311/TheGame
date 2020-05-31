import React, { Component } from "react";
import { INCREMENT_STORY } from "./redux/actions/actionTypes";
import Modal from "react-responsive-modal";
import { Story1 } from "./story";
import { Story2 } from "./story";
import { Story3 } from "./story";
import coin from "./images/coin.png";
import heart from "./images/heart.png";
import { connect } from "react-redux";

class NextStory extends Component {
  state = {
    open: false,
    costm: 250,
    costh: 25,
    storyNumber: 1,
  };

  openModal = () => {
    if (
      this.props.score >= this.state.costm &&
      this.props.heart >= this.state.costh
    )
      this.setState({ open: true });
  };
  next = () => {
    this.setState({ open: false });
    if (
      this.props.score >= this.state.costm &&
      this.props.heart >= this.state.costh
    ) {
      this.setState({
        costh: this.state.costh + this.state.costh * 3,
        costm: this.state.costm + this.state.costm * 6,
      });
      this.props.IncStory();
      this.setState({ storyNumber: this.state.storyNumber + 1 });
    }
  };

  CurrentStory = () => {
    if (this.state.storyNumber === 1) {
      return <Story1 next={this.next} />;
    } else if (this.state.storyNumber === 2) {
      return <Story2 next={this.next} />;
    } else if (this.state.storyNumber === 3) {
      return <Story3 next={this.next} />;
    }
  };

  render() {
    const { open } = this.state;
    return (
      <div className="">
        <div>
          <Modal open={open} onClose={this.next} center>
            {this.CurrentStory()}
          </Modal>
        </div>
        <div onClick={this.openModal}>
          <div className="image">
            <img className="card-img-top img-fluid" />
          </div>
          {this.state.storyNumber <= 3 ? (
            <button type="button" class="btn btn-success btn-lg">
              Expand your bisness ( Cost : {this.state.costh}
              <img
                src={heart}
                className="card-img "
                alt="..."
                style={{
                  width: "2.5vh",
                  height: "2.5vh",
                  marginLeft: "5px",
                  alignSelf: "center",
                }}
              />
              + {this.state.costm}
              <img
                src={coin}
                className="card-img "
                alt="..."
                style={{
                  width: "2.5vh",
                  height: "2.5vh",
                  marginLeft: "5px",
                  alignSelf: "center",
                }}
              />
              )
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-success btn-lg"
              hidden
            ></button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.operationsState.score,
    time: state.operationsState.time,
    heart: state.operationsState.heart,
    menu: state.operationsState.menu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    IncStory: () => dispatch({ type: INCREMENT_STORY }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextStory);
