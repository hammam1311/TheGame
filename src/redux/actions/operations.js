import { INCREMENT, DECREMENT, RESET } from "./actionTypes";

//Increment The score
export const increment = () => {
  return {
    type: INCREMENT
  };
};

//Decrement The Time
export const decrement = () => {
  return {
    type: DECREMENT
  };
};

//RESET
export const reset = () => {
  return {
    type: RESET
  };
};
