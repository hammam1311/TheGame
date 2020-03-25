const initialState = {
  counter: 0,
  time: 30
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 5
      };
    case "DECREMENT":
      return {
        ...state,
        time: state.time - 1
      };

    default:
      return state;
  }
};

export default reducer;
