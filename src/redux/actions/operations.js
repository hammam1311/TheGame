import {
  INCREMENT,
  DECREMENT,
  RESET,
  DECREMENTSCORE,
  INCREMENTHEART,
  INCREMENT_MENU,
  INCREMENT_STORY,
} from "./actionTypes";

//Increment The score
export const increment = (inc) => {
  return {
    type: INCREMENT,
    payload: inc,
  };
};

//Decrement The Time
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

//RESET
export const reset = () => {
  return {
    type: RESET,
  };
};

//pay
export const decrementScore = (payCost) => {
  return {
    type: DECREMENTSCORE,
    payload: payCost,
  };
};

//Heart
export const incrementHeart = (HeartInc) => {
  return {
    type: INCREMENTHEART,
    payload: HeartInc,
  };
};

//Increment The Menu
export const IncMenu = () => {
  return {
    type: INCREMENT_MENU,
  };
}; //Increment The Menu
export const IncStory = () => {
  return {
    type: INCREMENT_STORY,
  };
};
