import * as ActionTypes from "./actionTypes";
import ApiService from "../services/api-service";

export const createSeller = (title, description) => async (dispatch) => {
  try {
    const res = await ApiService.create({ title, description });

    dispatch({
      type: ActionTypes.CREATE_SELLER,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateSeller = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.update(id, data);

    dispatch({
      type: ActionTypes.UPDATE_SELLER,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteSeller = (id) => async (dispatch) => {
  try {
    await ApiService.delete(id);

    dispatch({
      type: ActionTypes.DELETE_SELLER,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveSellers = () => async (dispatch) => {
  try {
    const res = await ApiService.getAll();

    dispatch({
      type: ActionTypes.RETRIEVE_SELLERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findSellersByTitle = (title) => async (dispatch) => {
  try {
    const res = await ApiService.findByTitle(title);

    dispatch({
      type: ActionTypes.RETRIEVE_SELLERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setSellerPriceFilter = (price) => {
  return { type: ActionTypes.SET_SELLER_PRICE_FILTER, price: price };
};
