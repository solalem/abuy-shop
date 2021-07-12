import * as ActionTypes from "./actionTypes";

const initialState = {
  reviews: [],
  currentReview: null
};

const reviewsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_REVIEW:
      return [...state.reviews, payload];

    case ActionTypes.UPDATE_REVIEW:
      return state.reviews.map((Review) => {
        if (Review.id === payload.id) {
          return {
            ...Review,
            ...payload,
          };
        } else {
          return Review;
        }
      });

    case ActionTypes.DELETE_REVIEW:
      return state.reviews.filter(({ id }) => id !== payload.id);

    case ActionTypes.RETRIEVE_REVIEWS:
      return {
        ...state,
        reviews: payload
      };

    case ActionTypes.SET_REVIEW_PRICE_FILTER:
      let ReviewPriceFilter = state.priceFilter;
      ReviewPriceFilter = {
        ...ReviewPriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: ReviewPriceFilter,
      };

    // Comments
    case ActionTypes.ADD_COMMENT:
      return [...state.currentReview.comments, payload];

    case ActionTypes.UPDATE_COMMENT:
      return state.currentReview.comments.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_COMMENT:
      return state.currentReview.comments.filter(({ id }) => id !== payload.id);

    default:
      return {
        ...state,
      };
  }
};

export default reviewsReducer;
