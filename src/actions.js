const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

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
