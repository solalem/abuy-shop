import * as ActionTypes from "./actionTypes";
import ApiService from "../services/api-service";

export const createStore = (data) => async (dispatch) => {
  try {
    const res = await ApiService.create(data);

    dispatch({
      type: ActionTypes.CREATE_STORE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateStore = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.update(id, data);

    dispatch({
      type: ActionTypes.UPDATE_STORE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteStore = (id) => async (dispatch) => {
  try {
    await ApiService.delete(id);

    dispatch({
      type: ActionTypes.DELETE_STORE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveStores = () => async (dispatch) => {
  try {
    const res = await ApiService.getAll();

    dispatch({
      type: ActionTypes.RETRIEVE_STORES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findStoresByTitle = (title) => async (dispatch) => {
  try {
    const res = await ApiService.findByTitle(title);

    dispatch({
      type: ActionTypes.RETRIEVE_STORES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setStorePriceFilter = (price) => {
  return { type: ActionTypes.SET_STORE_PRICE_FILTER, price: price };
};


// BussinessHours
export const addBussinessHour = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addBussinessHour(id, data);
    dispatch({
      type: ActionTypes.ADD_BUSSINESSHOUR,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateBussinessHour = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateBussinessHour(id, data);
    dispatch({
      type: ActionTypes.UPDATE_BUSSINESSHOUR,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeBussinessHour = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeBussinessHour(id, data);
    dispatch({
      type: ActionTypes.REMOVE_BUSSINESSHOUR,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
