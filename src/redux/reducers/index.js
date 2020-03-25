import { combineReducers } from "redux";
// Reducers
import holesReducer from "./holes";
import avocadoReducer from "./avocado";

const rootReducer = combineReducers({
  holes: holesReducer,
  avocado: avocadoReducer
});

export default rootReducer;
