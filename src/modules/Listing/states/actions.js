import * as ActionTypes from "./actionTypes";
import ApiService from "../services/api-service";

export const createListing = (data) => async (dispatch) => {
  try {
    const res = await ApiService.create(data);

    dispatch({
      type: ActionTypes.CREATE_LISTING,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateListing = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.update(id, data);

    dispatch({
      type: ActionTypes.UPDATE_LISTING,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteListing = (id) => async (dispatch) => {
  try {
    await ApiService.delete(id);

    dispatch({
      type: ActionTypes.DELETE_LISTING,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveListings = () => async (dispatch) => {
  try {
    const res = await ApiService.getAll();

    dispatch({
      type: ActionTypes.RETRIEVE_LISTINGS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findListingsByTitle = (title) => async (dispatch) => {
  try {
    const res = await ApiService.findByTitle(title);

    dispatch({
      type: ActionTypes.RETRIEVE_LISTINGS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setListingPriceFilter = (price) => {
  return { type: ActionTypes.SET_LISTING_PRICE_FILTER, price: price };
};


// Variants
export const addVariant = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addVariant(id, data);
    dispatch({
      type: ActionTypes.ADD_VARIANT,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateVariant = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateVariant(id, data);
    dispatch({
      type: ActionTypes.UPDATE_VARIANT,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeVariant = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeVariant(id, data);
    dispatch({
      type: ActionTypes.REMOVE_VARIANT,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
// Images
export const addImage = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addImage(id, data);
    dispatch({
      type: ActionTypes.ADD_IMAGE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateImage = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateImage(id, data);
    dispatch({
      type: ActionTypes.UPDATE_IMAGE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeImage = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeImage(id, data);
    dispatch({
      type: ActionTypes.REMOVE_IMAGE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
// Coupons
export const addCoupon = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addCoupon(id, data);
    dispatch({
      type: ActionTypes.ADD_COUPON,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateCoupon = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateCoupon(id, data);
    dispatch({
      type: ActionTypes.UPDATE_COUPON,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeCoupon = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeCoupon(id, data);
    dispatch({
      type: ActionTypes.REMOVE_COUPON,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
// Discounts
export const addDiscount = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addDiscount(id, data);
    dispatch({
      type: ActionTypes.ADD_DISCOUNT,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateDiscount = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateDiscount(id, data);
    dispatch({
      type: ActionTypes.UPDATE_DISCOUNT,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeDiscount = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeDiscount(id, data);
    dispatch({
      type: ActionTypes.REMOVE_DISCOUNT,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
// Affiliates
export const addAffiliate = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addAffiliate(id, data);
    dispatch({
      type: ActionTypes.ADD_AFFILIATE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateAffiliate = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateAffiliate(id, data);
    dispatch({
      type: ActionTypes.UPDATE_AFFILIATE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeAffiliate = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeAffiliate(id, data);
    dispatch({
      type: ActionTypes.REMOVE_AFFILIATE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
