import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const combinedReducer = combineReducers({
  auth: authReducer
});

export const store = createStore(combinedReducer, composeWithDevTools());
