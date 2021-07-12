import * as ActionTypes from "./actionTypes";
import ApiService from "../services/api-service";

export const createPurchaseOrder = (title, description) => async (dispatch) => {
  try {
    const res = await ApiService.create({ title, description });

    dispatch({
      type: ActionTypes.CREATE_PURCHASEORDER,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updatePurchaseOrder = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.update(id, data);

    dispatch({
      type: ActionTypes.UPDATE_PURCHASEORDER,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deletePurchaseOrder = (id) => async (dispatch) => {
  try {
    await ApiService.delete(id);

    dispatch({
      type: ActionTypes.DELETE_PURCHASEORDER,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrievePurchaseOrders = () => async (dispatch) => {
  try {
    const res = await ApiService.getAll();

    dispatch({
      type: ActionTypes.RETRIEVE_PURCHASEORDERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findPurchaseOrdersByTitle = (title) => async (dispatch) => {
  try {
    const res = await ApiService.findByTitle(title);

    dispatch({
      type: ActionTypes.RETRIEVE_PURCHASEORDERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setPurchaseOrderPriceFilter = (price) => {
  return { type: ActionTypes.SET_PURCHASEORDER_PRICE_FILTER, price: price };
};

// OrderLines
export const addOrderLine = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addOrderLine(id, data);
    dispatch({
      type: ActionTypes.ADD_ORDERLINE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateOrderLine = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateOrderLine(id, data);
    dispatch({
      type: ActionTypes.UPDATE_ORDERLINE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeOrderLine = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeOrderLine(id, data);
    dispatch({
      type: ActionTypes.REMOVE_ORDERLINE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
