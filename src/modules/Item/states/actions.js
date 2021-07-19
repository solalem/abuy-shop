import * as ActionTypes from "./actionTypes";
import ApiService from "../services/api-service";

export const createItem = (data) => async (dispatch) => {
  try {
    const res = await ApiService.create(data);

    dispatch({
      type: ActionTypes.CREATE_ITEM,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateItem = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.update(id, data);

    dispatch({
      type: ActionTypes.UPDATE_ITEM,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    await ApiService.delete(id);

    dispatch({
      type: ActionTypes.DELETE_ITEM,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveItems = () => async (dispatch) => {
  try {
    const res = await ApiService.getAll();

    dispatch({
      type: ActionTypes.RETRIEVE_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findItemsByTitle = (title) => async (dispatch) => {
  try {
    const res = await ApiService.findByTitle(title);

    dispatch({
      type: ActionTypes.RETRIEVE_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setItemPriceFilter = (price) => {
  return { type: ActionTypes.SET_ITEM_PRICE_FILTER, price: price };
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

// ItemPropertys
export const addItemProperty = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addItemProperty(id, data);
    dispatch({
      type: ActionTypes.ADD_ITEMPROPERTY,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateItemProperty = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateItemProperty(id, data);
    dispatch({
      type: ActionTypes.UPDATE_ITEMPROPERTY,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeItemProperty = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeItemProperty(id, data);
    dispatch({
      type: ActionTypes.REMOVE_ITEMPROPERTY,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
