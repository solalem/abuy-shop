import * as ActionTypes from "./actionTypes";
import ApiService from "../services/api-service";

export const createComparison = (data) => async (dispatch) => {
  try {
    const res = await ApiService.create(data);

    dispatch({
      type: ActionTypes.CREATE_COMPARISON,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateComparison = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.update(id, data);

    dispatch({
      type: ActionTypes.UPDATE_COMPARISON,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteComparison = (id) => async (dispatch) => {
  try {
    await ApiService.delete(id);

    dispatch({
      type: ActionTypes.DELETE_COMPARISON,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveComparisons = () => async (dispatch) => {
  try {
    const res = await ApiService.getAll();

    dispatch({
      type: ActionTypes.RETRIEVE_COMPARISONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findComparisonsByTitle = (title) => async (dispatch) => {
  try {
    const res = await ApiService.findByTitle(title);

    dispatch({
      type: ActionTypes.RETRIEVE_COMPARISONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setComparisonPriceFilter = (price) => {
  return { type: ActionTypes.SET_COMPARISON_PRICE_FILTER, price: price };
};

export const getByBuyerId = (id) => async (dispatch) => {
  try {
    const res = await ApiService.getByBuyerId(id);

    dispatch({
      type: ActionTypes.GET_BY_BUYERID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// ComparisonItems
export const addComparisonItem = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addComparisonItem(id, data);
    dispatch({
      type: ActionTypes.ADD_COMPARISONITEM,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateComparisonItem = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateComparisonItem(id, data);
    dispatch({
      type: ActionTypes.UPDATE_COMPARISONITEM,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeComparisonItem = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeComparisonItem(id, data);
    dispatch({
      type: ActionTypes.REMOVE_COMPARISONITEM,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
