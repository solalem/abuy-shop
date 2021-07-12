import * as ActionTypes from "./actionTypes";

const initialState = {
  bundles: [],
  currentBundle: null
};

const bundlesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_BUNDLE:
      return [...state.bundles, payload];

    case ActionTypes.UPDATE_BUNDLE:
      return state.bundles.map((Bundle) => {
        if (Bundle.id === payload.id) {
          return {
            ...Bundle,
            ...payload,
          };
        } else {
          return Bundle;
        }
      });

    case ActionTypes.DELETE_BUNDLE:
      return state.bundles.filter(({ id }) => id !== payload.id);

    case ActionTypes.RETRIEVE_BUNDLES:
      return {
        ...state,
        bundles: payload
      };

    case ActionTypes.SET_BUNDLE_PRICE_FILTER:
      let BundlePriceFilter = state.priceFilter;
      BundlePriceFilter = {
        ...BundlePriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: BundlePriceFilter,
      };

    // BundleItems
    case ActionTypes.ADD_BUNDLEITEM:
      return [...state.currentBundle.bundleItems, payload];

    case ActionTypes.UPDATE_BUNDLEITEM:
      return state.currentBundle.bundleItems.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_BUNDLEITEM:
      return state.currentBundle.bundleItems.filter(({ id }) => id !== payload.id);

    default:
      return {
        ...state,
      };
  }
};

export default bundlesReducer;
