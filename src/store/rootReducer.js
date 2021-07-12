import { combineReducers } from "redux";

import main from "./states/appReducer";
 
import departments from "../modules/Department/states/reducer";
 
import categories from "../modules/Category/states/reducer";
 
import commodities from "../modules/Commodity/states/reducer";
 
import businessTemplates from "../modules/BusinessTemplate/states/reducer";
 
import sellers from "../modules/Seller/states/reducer";
 
import items from "../modules/Item/states/reducer";
 
import bundles from "../modules/Bundle/states/reducer";

const rootReducer = combineReducers(
  {
    departments,
    categories,
    commodities,
    businessTemplates,
    sellers,
    items,
    bundles,
    main, 
  }
);

export default rootReducer;
