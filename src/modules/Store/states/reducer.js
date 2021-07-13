import * as ActionTypes from "./actionTypes";

const initialState = {
  stores: [],
  currentStore: null
};

const storesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_STORE:
      return [...state.stores, payload];

    case ActionTypes.UPDATE_STORE:
      return state.stores.map((Store) => {
        if (Store.id === payload.id) {
          return {
            ...Store,
            ...payload,
          };
        } else {
          return Store;
        }
      });

    case ActionTypes.DELETE_STORE:
      return state.stores.filter(({ id }) => id !== payload.id);

    case ActionTypes.RETRIEVE_STORES:
      return {
        ...state,
        stores: payload
      };

    case ActionTypes.SET_STORE_PRICE_FILTER:
      let StorePriceFilter = state.priceFilter;
      StorePriceFilter = {
        ...StorePriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: StorePriceFilter,
      };


    // BussinessHours
    case ActionTypes.ADD_BUSSINESSHOUR:
      return [...state.currentStore.bussinessHours, payload];

    case ActionTypes.UPDATE_BUSSINESSHOUR:
      return state.currentStore.bussinessHours.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_BUSSINESSHOUR:
      return state.currentStore.bussinessHours.filter(({ id }) => id !== payload.id);

    default:
      return {
        ...state,
      };
  }
};

export default storesReducer;
