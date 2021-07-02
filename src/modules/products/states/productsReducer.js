import * as actionTypes from "./actionTypes";
//import Data from "../../../static/data";

const initialState = {
  priceFilter: {
    min: 0,
    max: 3700,
    pricerange: 3700,
  },
  usedCurrency: { KES: 1, symbol: "Ksh " },
  products: [],
  currentProduct: null
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.CREATE_PRODUCT:
      return [...state.products, payload];

    case actionTypes.UPDATE_PRODUCT:
      return state.products.map((product) => {
        if (product.id === payload.id) {
          return {
            ...product,
            ...payload,
          };
        } else {
          return product;
        }
      });

    case actionTypes.DELETE_PRODUCT:
      return state.products.filter(({ id }) => id !== payload.id);

    case actionTypes.RETRIEVE_PRODUCTS:
      return {
        ...state,
        products: payload
      };

    case actionTypes.SET_PRODUCT_PRICE_FILTER:
      let productPriceFilter = state.priceFilter;
      productPriceFilter = {
        ...productPriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: productPriceFilter,
      };
      
    case actionTypes.ADD_ATTRIBUTE:
      return [...state.currentProduct.attributes, payload];

    case actionTypes.UPDATE_ATTRIBUTE:
      return state.currentProduct.attributes.map((atribute) => {
        if (atribute.id === payload.id) {
          return {
            ...atribute,
            ...payload,
          };
        } else {
          return atribute;
        }
      });

    case actionTypes.REMOVE_ATTRIBUTE:
      return state.currentProduct.attributes.filter(({ id }) => id !== payload.id);

    default:
      return {
        ...state,
      };
  }
};

export default productsReducer;
