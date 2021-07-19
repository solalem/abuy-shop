import * as ActionTypes from "./actionTypes";

const initialState = {
  commodities: [],
  currentCommodity: null
};

const commoditiesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_COMMODITY:
      return [...state.commodities, payload];

    case ActionTypes.UPDATE_COMMODITY:
      return state.commodities.map((Commodity) => {
        if (Commodity.id === payload.id) {
          return {
            ...Commodity,
            ...payload,
          };
        } else {
          return Commodity;
        }
      });

    case ActionTypes.DELETE_COMMODITY:
      return state.commodities.filter(({ id }) => id !== payload.id);

    case ActionTypes.RETRIEVE_COMMODITIES:
      return {
        ...state,
        commodities: payload.items
      };

    case ActionTypes.SET_COMMODITY_PRICE_FILTER:
      let CommodityPriceFilter = state.priceFilter;
      CommodityPriceFilter = {
        ...CommodityPriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: CommodityPriceFilter,
      };

    case ActionTypes.GET_BY_CATEGORYID:
      return {
        ...state,
        commodities: payload.items
      };

    // Tags
    case ActionTypes.ADD_TAG:
      return [...state.currentCommodity.tags, payload];

    case ActionTypes.UPDATE_TAG:
      return state.currentCommodity.tags.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_TAG:
      return state.currentCommodity.tags.filter(({ id }) => id !== payload.id);
    // CommodityAttributes
    case ActionTypes.ADD_COMMODITYATTRIBUTE:
      return [...state.currentCommodity.commodityAttributes, payload];

    case ActionTypes.UPDATE_COMMODITYATTRIBUTE:
      return state.currentCommodity.commodityAttributes.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_COMMODITYATTRIBUTE:
      return state.currentCommodity.commodityAttributes.filter(({ id }) => id !== payload.id);

    default:
      return {
        ...state,
      };
  }
};

export default commoditiesReducer;
