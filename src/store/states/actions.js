import * as actionTypes from "./actionTypes";

export const toogleSideBar = () => {
  return {
    type: actionTypes.TOGGLE_SIDE_BAR,
  };
};

export const changeCurrency = (currencyName) => {
  // currency value can be fetched here from an external api and then passes to the store
  return {
    type: actionTypes.CHANGE_CURRENCY,
    currencyName: currencyName,
  };
};
