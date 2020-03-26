import { combineReducers } from "redux";
// Reducers
import operationsReducer from "./operations";

const rootReducer = combineReducers({
  operationsState: operationsReducer
});

export default rootReducer;
