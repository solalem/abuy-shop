import * as ActionTypes from "./actionTypes";
import ApiService from "../services/api-service";

export const createCommodity = (data) => async (dispatch) => {
  try {
    const res = await ApiService.create(data);

    dispatch({
      type: ActionTypes.CREATE_COMMODITY,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateCommodity = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.update(id, data);

    dispatch({
      type: ActionTypes.UPDATE_COMMODITY,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteCommodity = (id) => async (dispatch) => {
  try {
    await ApiService.delete(id);

    dispatch({
      type: ActionTypes.DELETE_COMMODITY,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveCommodities = () => async (dispatch) => {
  try {
    const res = await ApiService.getAll();

    dispatch({
      type: ActionTypes.RETRIEVE_COMMODITIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findCommoditiesByTitle = (title) => async (dispatch) => {
  try {
    const res = await ApiService.findByTitle(title);

    dispatch({
      type: ActionTypes.RETRIEVE_COMMODITIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setCommodityPriceFilter = (price) => {
  return { type: ActionTypes.SET_COMMODITY_PRICE_FILTER, price: price };
};

export const getByCategoryId = (id) => async (dispatch) => {
  try {
    const res = await ApiService.getByCategoryId(id);

    dispatch({
      type: ActionTypes.GET_BY_CATEGORYID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Tags
export const addTag = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addTag(id, data);
    dispatch({
      type: ActionTypes.ADD_TAG,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateTag = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateTag(id, data);
    dispatch({
      type: ActionTypes.UPDATE_TAG,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeTag = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeTag(id, data);
    dispatch({
      type: ActionTypes.REMOVE_TAG,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
// CommodityAttributes
export const addCommodityAttribute = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addCommodityAttribute(id, data);
    dispatch({
      type: ActionTypes.ADD_COMMODITYATTRIBUTE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateCommodityAttribute = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateCommodityAttribute(id, data);
    dispatch({
      type: ActionTypes.UPDATE_COMMODITYATTRIBUTE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeCommodityAttribute = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeCommodityAttribute(id, data);
    dispatch({
      type: ActionTypes.REMOVE_COMMODITYATTRIBUTE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
