import * as ActionTypes from "./actionTypes";

const initialState = {
  buyers: [],
  currentBuyer: null
};

const buyersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_BUYER:
      return [...state.buyers, payload];

    case ActionTypes.UPDATE_BUYER:
      return state.buyers.map((Buyer) => {
        if (Buyer.id === payload.id) {
          return {
            ...Buyer,
            ...payload,
          };
        } else {
          return Buyer;
        }
      });

    case ActionTypes.DELETE_BUYER:
      return state.buyers.filter(({ id }) => id !== payload.id);

    case ActionTypes.RETRIEVE_BUYERS:
      return {
        ...state,
        buyers: payload
      };

    case ActionTypes.SET_BUYER_PRICE_FILTER:
      let BuyerPriceFilter = state.priceFilter;
      BuyerPriceFilter = {
        ...BuyerPriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: BuyerPriceFilter,
      };


    default:
      return {
        ...state,
      };
  }
};

export default buyersReducer;
