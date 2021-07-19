import * as ActionTypes from "./actionTypes";
import ApiService from "../services/api-service";

export const createBuyer = (data) => async (dispatch) => {
  try {
    const res = await ApiService.create(data);

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


// Mamilas
export const addMamila = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addMamila(id, data);
    dispatch({
      type: ActionTypes.ADD_MAMILA,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateMamila = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateMamila(id, data);
    dispatch({
      type: ActionTypes.UPDATE_MAMILA,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeMamila = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeMamila(id, data);
    dispatch({
      type: ActionTypes.REMOVE_MAMILA,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
// FavouriteItems
export const addFavouriteItem = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addFavouriteItem(id, data);
    dispatch({
      type: ActionTypes.ADD_FAVOURITEITEM,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateFavouriteItem = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateFavouriteItem(id, data);
    dispatch({
      type: ActionTypes.UPDATE_FAVOURITEITEM,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeFavouriteItem = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeFavouriteItem(id, data);
    dispatch({
      type: ActionTypes.REMOVE_FAVOURITEITEM,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
// Recommendations
export const addRecommendation = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addRecommendation(id, data);
    dispatch({
      type: ActionTypes.ADD_RECOMMENDATION,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateRecommendation = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateRecommendation(id, data);
    dispatch({
      type: ActionTypes.UPDATE_RECOMMENDATION,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeRecommendation = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeRecommendation(id, data);
    dispatch({
      type: ActionTypes.REMOVE_RECOMMENDATION,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
