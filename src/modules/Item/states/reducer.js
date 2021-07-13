import * as ActionTypes from "./actionTypes";

const initialState = {
  items: [],
  currentItem: null
};

const itemsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_ITEM:
      return [...state.items, payload];

    case ActionTypes.UPDATE_ITEM:
      return state.items.map((Item) => {
        if (Item.id === payload.id) {
          return {
            ...Item,
            ...payload,
          };
        } else {
          return Item;
        }
      });

    case ActionTypes.DELETE_ITEM:
      return state.items.filter(({ id }) => id !== payload.id);

    case ActionTypes.RETRIEVE_ITEMS:
      return {
        ...state,
        items: payload
      };

    case ActionTypes.SET_ITEM_PRICE_FILTER:
      let ItemPriceFilter = state.priceFilter;
      ItemPriceFilter = {
        ...ItemPriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: ItemPriceFilter,
      };

    case ActionTypes.GET_BY_SELLERID:
      return {
        ...state,
        items: payload
      };

    // ItemPropertys
    case ActionTypes.ADD_ITEMPROPERTY:
      return [...state.currentItem.itemProperties, payload];

    case ActionTypes.UPDATE_ITEMPROPERTY:
      return state.currentItem.itemProperties.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_ITEMPROPERTY:
      return state.currentItem.itemProperties.filter(({ id }) => id !== payload.id);

    default:
      return {
        ...state,
      };
  }
};

export default itemsReducer;
