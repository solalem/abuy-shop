import * as ActionTypes from "./actionTypes";

const initialState = {
  listings: [],
  currentListing: null
};

const listingsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_LISTING:
      return [...state.listings, payload];

    case ActionTypes.UPDATE_LISTING:
      return state.listings.map((Listing) => {
        if (Listing.id === payload.id) {
          return {
            ...Listing,
            ...payload,
          };
        } else {
          return Listing;
        }
      });

    case ActionTypes.DELETE_LISTING:
      return state.listings.filter(({ id }) => id !== payload.id);

    case ActionTypes.RETRIEVE_LISTINGS:
      return {
        ...state,
        listings: payload
      };

    case ActionTypes.SET_LISTING_PRICE_FILTER:
      let ListingPriceFilter = state.priceFilter;
      ListingPriceFilter = {
        ...ListingPriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: ListingPriceFilter,
      };


    // Variants
    case ActionTypes.ADD_VARIANT:
      return [...state.currentListing.variants, payload];

    case ActionTypes.UPDATE_VARIANT:
      return state.currentListing.variants.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_VARIANT:
      return state.currentListing.variants.filter(({ id }) => id !== payload.id);
    // Images
    case ActionTypes.ADD_IMAGE:
      return [...state.currentListing.images, payload];

    case ActionTypes.UPDATE_IMAGE:
      return state.currentListing.images.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_IMAGE:
      return state.currentListing.images.filter(({ id }) => id !== payload.id);
    // Coupons
    case ActionTypes.ADD_COUPON:
      return [...state.currentListing.coupons, payload];

    case ActionTypes.UPDATE_COUPON:
      return state.currentListing.coupons.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_COUPON:
      return state.currentListing.coupons.filter(({ id }) => id !== payload.id);
    // Discounts
    case ActionTypes.ADD_DISCOUNT:
      return [...state.currentListing.discounts, payload];

    case ActionTypes.UPDATE_DISCOUNT:
      return state.currentListing.discounts.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_DISCOUNT:
      return state.currentListing.discounts.filter(({ id }) => id !== payload.id);
    // Affiliates
    case ActionTypes.ADD_AFFILIATE:
      return [...state.currentListing.affiliates, payload];

    case ActionTypes.UPDATE_AFFILIATE:
      return state.currentListing.affiliates.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_AFFILIATE:
      return state.currentListing.affiliates.filter(({ id }) => id !== payload.id);

    default:
      return {
        ...state,
      };
  }
};

export default listingsReducer;
