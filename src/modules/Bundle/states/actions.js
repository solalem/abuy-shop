import * as ActionTypes from "./actionTypes";
import ApiService from "../services/api-service";

export const createBundle = (title, description) => async (dispatch) => {
  try {
    const res = await ApiService.create({ title, description });

    dispatch({
      type: ActionTypes.CREATE_BUNDLE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateBundle = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.update(id, data);

    dispatch({
      type: ActionTypes.UPDATE_BUNDLE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteBundle = (id) => async (dispatch) => {
  try {
    await ApiService.delete(id);

    dispatch({
      type: ActionTypes.DELETE_BUNDLE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveBundles = () => async (dispatch) => {
  try {
    const res = await ApiService.getAll();

    dispatch({
      type: ActionTypes.RETRIEVE_BUNDLES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findBundlesByTitle = (title) => async (dispatch) => {
  try {
    const res = await ApiService.findByTitle(title);

    dispatch({
      type: ActionTypes.RETRIEVE_BUNDLES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setBundlePriceFilter = (price) => {
  return { type: ActionTypes.SET_BUNDLE_PRICE_FILTER, price: price };
};

export const getBySellerId = (id) => async (dispatch) => {
  try {
    const res = await ApiService.getBySellerId(id);

    dispatch({
      type: ActionTypes.GET_BY_SELLERID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// BundleItems
export const addBundleItem = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addBundleItem(id, data);
    dispatch({
      type: ActionTypes.ADD_BUNDLEITEM,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateBundleItem = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateBundleItem(id, data);
    dispatch({
      type: ActionTypes.UPDATE_BUNDLEITEM,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeBundleItem = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeBundleItem(id, data);
    dispatch({
      type: ActionTypes.REMOVE_BUNDLEITEM,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
