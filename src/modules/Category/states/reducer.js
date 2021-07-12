import * as ActionTypes from "./actionTypes";

const initialState = {
  categories: [],
  currentCategory: null
};

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_CATEGORY:
      return [...state.categories, payload];

    case ActionTypes.UPDATE_CATEGORY:
      return state.categories.map((Category) => {
        if (Category.id === payload.id) {
          return {
            ...Category,
            ...payload,
          };
        } else {
          return Category;
        }
      });

    case ActionTypes.DELETE_CATEGORY:
      return state.categories.filter(({ id }) => id !== payload.id);

    case ActionTypes.RETRIEVE_CATEGORIES:
      return {
        ...state,
        categories: payload
      };

    case ActionTypes.SET_CATEGORY_PRICE_FILTER:
      let CategoryPriceFilter = state.priceFilter;
      CategoryPriceFilter = {
        ...CategoryPriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: CategoryPriceFilter,
      };


    default:
      return {
        ...state,
      };
  }
};

export default categoriesReducer;
