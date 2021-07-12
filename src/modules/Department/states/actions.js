import * as ActionTypes from "./actionTypes";
import ApiService from "../services/api-service";

export const createDepartment = (title, description) => async (dispatch) => {
  try {
    const res = await ApiService.create({ title, description });

    dispatch({
      type: ActionTypes.CREATE_DEPARTMENT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateDepartment = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.update(id, data);

    dispatch({
      type: ActionTypes.UPDATE_DEPARTMENT,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteDepartment = (id) => async (dispatch) => {
  try {
    await ApiService.delete(id);

    dispatch({
      type: ActionTypes.DELETE_DEPARTMENT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveDepartments = () => async (dispatch) => {
  try {
    const res = await ApiService.getAll();

    dispatch({
      type: ActionTypes.RETRIEVE_DEPARTMENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findDepartmentsByTitle = (title) => async (dispatch) => {
  try {
    const res = await ApiService.findByTitle(title);

    dispatch({
      type: ActionTypes.RETRIEVE_DEPARTMENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setDepartmentPriceFilter = (price) => {
  return { type: ActionTypes.SET_DEPARTMENT_PRICE_FILTER, price: price };
};
