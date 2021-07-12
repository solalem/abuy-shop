import * as ActionTypes from "./actionTypes";
import ApiService from "../services/api-service";

export const createReview = (title, description) => async (dispatch) => {
  try {
    const res = await ApiService.create({ title, description });

    dispatch({
      type: ActionTypes.CREATE_REVIEW,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateReview = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.update(id, data);

    dispatch({
      type: ActionTypes.UPDATE_REVIEW,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteReview = (id) => async (dispatch) => {
  try {
    await ApiService.delete(id);

    dispatch({
      type: ActionTypes.DELETE_REVIEW,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveReviews = () => async (dispatch) => {
  try {
    const res = await ApiService.getAll();

    dispatch({
      type: ActionTypes.RETRIEVE_REVIEWS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findReviewsByTitle = (title) => async (dispatch) => {
  try {
    const res = await ApiService.findByTitle(title);

    dispatch({
      type: ActionTypes.RETRIEVE_REVIEWS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setReviewPriceFilter = (price) => {
  return { type: ActionTypes.SET_REVIEW_PRICE_FILTER, price: price };
};

// Comments
export const addComment = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.addComment(id, data);
    dispatch({
      type: ActionTypes.ADD_COMMENT,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateComment = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.updateComment(id, data);
    dispatch({
      type: ActionTypes.UPDATE_COMMENT,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeComment = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.removeComment(id, data);
    dispatch({
      type: ActionTypes.REMOVE_COMMENT,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
