import * as ActionTypes from "./actionTypes";
import ApiService from "../services/api-service";

export const createCategory = (title, description) => async (dispatch) => {
  try {
    const res = await ApiService.create({ title, description });

    dispatch({
      type: ActionTypes.CREATE_CATEGORY,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateCategory = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.update(id, data);

    dispatch({
      type: ActionTypes.UPDATE_CATEGORY,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    await ApiService.delete(id);

    dispatch({
      type: ActionTypes.DELETE_CATEGORY,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveCategories = () => async (dispatch) => {
  try {
    const res = await ApiService.getAll();

    dispatch({
      type: ActionTypes.RETRIEVE_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findCategoriesByTitle = (title) => async (dispatch) => {
  try {
    const res = await ApiService.findByTitle(title);

    dispatch({
      type: ActionTypes.RETRIEVE_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setCategoryPriceFilter = (price) => {
  return { type: ActionTypes.SET_CATEGORY_PRICE_FILTER, price: price };
};
