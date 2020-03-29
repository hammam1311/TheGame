import {
  INCREMENT,
  DECREMENT,
  RESET,
  DECREMENTSCORE,
  INCREMENTHEART,
  INCREMENT_MENU
} from "../actions/actionTypes";

const initialState = {
  score: 30,
  time: 72000,
  heart: 5,
  menu: 1,
  reset: false,
  ending: 1

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        score: state.score + 5
      };
    case DECREMENT:
      return {
        ...state,
        time: state.time - 1
      };
    case RESET:
      return {
        ...state,
        score: 0,
        time: 1000,
        reset: true
      };
    case DECREMENTSCORE:
      return {
        ...state,
        score: state.score - action.payload
      };
    case INCREMENTHEART:
      return {
        ...state,
        heart: state.heart + action.payload
      };
    case INCREMENT_MENU:
      return {
        ...state,
        menu: state.menu + 1
      };

    default:
      return state;
  }
};

export default reducer;
