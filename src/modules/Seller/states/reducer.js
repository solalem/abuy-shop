import * as ActionTypes from "./actionTypes";

const initialState = {
  sellers: [],
  currentSeller: null
};

const sellersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_SELLER:
      return [...state.sellers, payload];

    case ActionTypes.UPDATE_SELLER:
      return state.sellers.map((Seller) => {
        if (Seller.id === payload.id) {
          return {
            ...Seller,
            ...payload,
          };
        } else {
          return Seller;
        }
      });

    case ActionTypes.DELETE_SELLER:
      return state.sellers.filter(({ id }) => id !== payload.id);

    case ActionTypes.RETRIEVE_SELLERS:
      return {
        ...state,
        sellers: payload.items
      };

    case ActionTypes.SET_SELLER_PRICE_FILTER:
      let SellerPriceFilter = state.priceFilter;
      SellerPriceFilter = {
        ...SellerPriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: SellerPriceFilter,
      };



    default:
      return {
        ...state,
      };
  }
};

export default sellersReducer;
