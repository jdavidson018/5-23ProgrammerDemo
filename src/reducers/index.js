import { combineReducers } from "redux";
import dogReducer from "./dogReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  dogs: dogReducer,
  form: formReducer
});
