import * as ActionTypes from "./actionTypes";

const initialState = {
  comparisons: [],
  currentComparison: null
};

const comparisonsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_COMPARISON:
      return [...state.comparisons, payload];

    case ActionTypes.UPDATE_COMPARISON:
      return state.comparisons.map((Comparison) => {
        if (Comparison.id === payload.id) {
          return {
            ...Comparison,
            ...payload,
          };
        } else {
          return Comparison;
        }
      });

    case ActionTypes.DELETE_COMPARISON:
      return state.comparisons.filter(({ id }) => id !== payload.id);

    case ActionTypes.RETRIEVE_COMPARISONS:
      return {
        ...state,
        comparisons: payload
      };

    case ActionTypes.SET_COMPARISON_PRICE_FILTER:
      let ComparisonPriceFilter = state.priceFilter;
      ComparisonPriceFilter = {
        ...ComparisonPriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: ComparisonPriceFilter,
      };

    case ActionTypes.GET_BY_BUYERID:
      return {
        ...state,
        comparisons: payload
      };

    // ComparisonItems
    case ActionTypes.ADD_COMPARISONITEM:
      return [...state.currentComparison.comparisonItems, payload];

    case ActionTypes.UPDATE_COMPARISONITEM:
      return state.currentComparison.comparisonItems.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_COMPARISONITEM:
      return state.currentComparison.comparisonItems.filter(({ id }) => id !== payload.id);

    default:
      return {
        ...state,
      };
  }
};

export default comparisonsReducer;
