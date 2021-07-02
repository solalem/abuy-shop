import * as actionTypes from "./actionTypes";

const initialState = {
  showSideNavigation: false,
  // used currency should load with the default currency name and rate
  usedCurrency: { KES: 1, symbol: "Ksh " },
  // exchange rates can be got from any api source
  exchangeRates: {
    base: "KES",
    date: "2019-01-29",
    rates: {
      KES: 1,
      USD: 0.0099,
      GBP: 0.0075,
      EUR: 0.0087,
      TZS: 22.92,
      UGX: 36.33,
      NGN: 3.59,
      INR: 0.71,
    },
  },
  // overkill but doing it for fun
  currencySymbols: {
    KES: "Ksh ",
    USD: "$",
    GBP: "£",
    EUR: "€",
    TZS: "TSh ",
    UGX: "USh ",
    NGN: "₦",
    INR: "₹",
  },
  productMaxShowModal: false,
};//Data;

const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.TOGGLE_SIDE_BAR:
      return {
        ...state,
        showSideNavigation: !state.showSideNavigation,
      };

    case actionTypes.CHANGE_CURRENCY: {
      let currencyName = null;
      let currencyValue = null;
      let currencyObj = {};

      let currencyNameSearch = Object.keys(state.exchangeRates.rates).filter(
        (rate) => action.currencyName === rate
      );
      if (currencyNameSearch) {
        currencyName = action.currencyName;
        currencyValue = state.exchangeRates.rates[currencyName];

        currencyObj[currencyName] = currencyValue;
        currencyObj["symbol"] = state.currencySymbols[currencyName];
      }

      return {
        ...state,
        // just in case the currency is not found
        usedCurrency: currencyNameSearch
          ? currencyObj
          : this.state.usedCurrency,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default appReducer;
