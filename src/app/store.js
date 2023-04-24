//implementing redux
//while  working with redux three things are mandatory  reducer ,action ,constant.
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { ProductReducer } from "../reducers/ProductReducer";

const reducer = combineReducers({
  products: ProductReducer,
});

let initialState = {};

const middleware = [thunk];

export const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
