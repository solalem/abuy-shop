import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

// use this to show redux dev tool
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// const store = createStore(shopReducer, applyMiddleware(thunk));

export default store;
