import { combineReducers } from "redux";

import main from "./states/appReducer";
import products from "../modules/products/states/productsReducer";

const rootReducer = combineReducers(
  {
    products,
    main, 
  }
);

export default rootReducer;
