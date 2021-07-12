import * as ActionTypes from "./actionTypes";
import ApiService from "../services/api-service";

export const createBuyer = (title, description) => async (dispatch) => {
  try {
    const res = await ApiService.create({ title, description });

    dispatch({
      type: ActionTypes.CREATE_BUYER,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateBuyer = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.update(id, data);

    dispatch({
      type: ActionTypes.UPDATE_BUYER,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteBuyer = (id) => async (dispatch) => {
  try {
    await ApiService.delete(id);

    dispatch({
      type: ActionTypes.DELETE_BUYER,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveBuyers = () => async (dispatch) => {
  try {
    const res = await ApiService.getAll();

    dispatch({
      type: ActionTypes.RETRIEVE_BUYERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findBuyersByTitle = (title) => async (dispatch) => {
  try {
    const res = await ApiService.findByTitle(title);

    dispatch({
      type: ActionTypes.RETRIEVE_BUYERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setBuyerPriceFilter = (price) => {
  return { type: ActionTypes.SET_BUYER_PRICE_FILTER, price: price };
};
