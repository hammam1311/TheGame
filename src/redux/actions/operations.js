import {
  INCREMENT,
  DECREMENT,
  RESET,
  DECREMENTSCORE,
  INCREMENTHEART,
  INCREMENT_MENU
} from "./actionTypes";

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

//pay
export const decrementScore = payCost => {
  return {
    type: DECREMENTSCORE,
    payload: payCost
  };
};

//Heart
export const incrementHeart = HeartInc => {
  return {
    type: INCREMENTHEART,
    payload: HeartInc
  };
};

//Increment The Menu
export const IncMenu = () => {
  return {
    type: INCREMENT_MENU
  };
};
