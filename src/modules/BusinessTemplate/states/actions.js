import * as ActionTypes from "./actionTypes";
import ApiService from "../services/api-service";

export const createBusinessTemplate = (title, description) => async (dispatch) => {
  try {
    const res = await ApiService.create({ title, description });

    dispatch({
      type: ActionTypes.CREATE_BUSINESSTEMPLATE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateBusinessTemplate = (id, data) => async (dispatch) => {
  try {
    const res = await ApiService.update(id, data);

    dispatch({
      type: ActionTypes.UPDATE_BUSINESSTEMPLATE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteBusinessTemplate = (id) => async (dispatch) => {
  try {
    await ApiService.delete(id);

    dispatch({
      type: ActionTypes.DELETE_BUSINESSTEMPLATE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveBusinessTemplates = () => async (dispatch) => {
  try {
    const res = await ApiService.getAll();

    dispatch({
      type: ActionTypes.RETRIEVE_BUSINESSTEMPLATES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findBusinessTemplatesByTitle = (title) => async (dispatch) => {
  try {
    const res = await ApiService.findByTitle(title);

    dispatch({
      type: ActionTypes.RETRIEVE_BUSINESSTEMPLATES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setBusinessTemplatePriceFilter = (price) => {
  return { type: ActionTypes.SET_BUSINESSTEMPLATE_PRICE_FILTER, price: price };
};

export const getByDepartmentId = (id) => async (dispatch) => {
  try {
    const res = await ApiService.getByDepartmentId(id);

    dispatch({
      type: ActionTypes.GET_BY_DEPARTMENTID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
