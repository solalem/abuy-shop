import * as ActionTypes from "./actionTypes";
import ApiService from "../services/api-service";

export const createCart = (title, description) => async (dispatch) => {
  try {
    const res = await ApiService.create({ title, description });

    dispatch({
      type: ActionTypes.CREATE_CART,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateCart = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.update(id, data);

    dispatch({
      type: ActionTypes.UPDATE_CART,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteCart = (id) => async (dispatch) => {
  try {
    await ApiService.delete(id);

    dispatch({
      type: ActionTypes.DELETE_CART,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveCarts = () => async (dispatch) => {
  try {
    const res = await ApiService.getAll();

    dispatch({
      type: ActionTypes.RETRIEVE_CARTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findCartsByTitle = (title) => async (dispatch) => {
  try {
    const res = await ApiService.findByTitle(title);

    dispatch({
      type: ActionTypes.RETRIEVE_CARTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setCartPriceFilter = (price) => {
  return { type: ActionTypes.SET_CART_PRICE_FILTER, price: price };
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

// CartLines
export const addCartLine = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addCartLine(id, data);
    dispatch({
      type: ActionTypes.ADD_CARTLINE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateCartLine = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateCartLine(id, data);
    dispatch({
      type: ActionTypes.UPDATE_CARTLINE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeCartLine = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeCartLine(id, data);
    dispatch({
      type: ActionTypes.REMOVE_CARTLINE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
