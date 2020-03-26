const initialState = {
  score: 0,
  time: 10,
  reset: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        score: state.score + 5
      };
    case "DECREMENT":
      return {
        ...state,
        time: state.time - 1
      };
    case "RESET":
      return {
        ...state,
        score: 0,
        time: 10,
        reset: true
      };
    default:
      return state;
  }
};

export default reducer;
