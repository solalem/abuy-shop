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
        buyers: payload.items
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


    // Mamilas
    case ActionTypes.ADD_MAMILA:
      return [...state.currentBuyer.mamilas, payload];

    case ActionTypes.UPDATE_MAMILA:
      return state.currentBuyer.mamilas.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_MAMILA:
      return state.currentBuyer.mamilas.filter(({ id }) => id !== payload.id);
    // FavouriteItems
    case ActionTypes.ADD_FAVOURITEITEM:
      return [...state.currentBuyer.favouriteItems, payload];

    case ActionTypes.UPDATE_FAVOURITEITEM:
      return state.currentBuyer.favouriteItems.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_FAVOURITEITEM:
      return state.currentBuyer.favouriteItems.filter(({ id }) => id !== payload.id);
    // Recommendations
    case ActionTypes.ADD_RECOMMENDATION:
      return [...state.currentBuyer.recommendations, payload];

    case ActionTypes.UPDATE_RECOMMENDATION:
      return state.currentBuyer.recommendations.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_RECOMMENDATION:
      return state.currentBuyer.recommendations.filter(({ id }) => id !== payload.id);

    default:
      return {
        ...state,
      };
  }
};

export default buyersReducer;
