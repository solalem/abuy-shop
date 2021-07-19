import * as ActionTypes from "./actionTypes";

const initialState = {
  carts: [],
  currentCart: null
};

const cartsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_CART:
      return [...state.carts, payload];

    case ActionTypes.UPDATE_CART:
      return state.carts.map((Cart) => {
        if (Cart.id === payload.id) {
          return {
            ...Cart,
            ...payload,
          };
        } else {
          return Cart;
        }
      });

    case ActionTypes.DELETE_CART:
      return state.carts.filter(({ id }) => id !== payload.id);

    case ActionTypes.RETRIEVE_CARTS:
      return {
        ...state,
        carts: payload.items
      };

    case ActionTypes.SET_CART_PRICE_FILTER:
      let CartPriceFilter = state.priceFilter;
      CartPriceFilter = {
        ...CartPriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: CartPriceFilter,
      };

    case ActionTypes.GET_BY_BUYERID:
      return {
        ...state,
        carts: payload.items
      };

    // CartLines
    case ActionTypes.ADD_CARTLINE:
      return [...state.currentCart.cartLines, payload];

    case ActionTypes.UPDATE_CARTLINE:
      return state.currentCart.cartLines.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_CARTLINE:
      return state.currentCart.cartLines.filter(({ id }) => id !== payload.id);

    default:
      return {
        ...state,
      };
  }
};

export default cartsReducer;
