import * as actionTypes from "./actionTypes";
import ProductsService from "../services/products.service";

export const createProduct = (title, description) => async (dispatch) => {
  try {
    const res = await ProductsService.create({ title, description });

    dispatch({
      type: actionTypes.CREATE_PRODUCT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateProduct = (id, data) => async (dispatch) => {
  try {
    const res = await ProductsService.update(id, data);

    dispatch({
      type: actionTypes.UPDATE_PRODUCT,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await ProductsService.delete(id);

    dispatch({
      type: actionTypes.DELETE_PRODUCT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveProducts = () => async (dispatch) => {
  try {
    const res = await ProductsService.getAll();

    dispatch({
      type: actionTypes.RETRIEVE_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findProductsByTitle = (title) => async (dispatch) => {
  try {
    const res = await ProductsService.findByTitle(title);

    dispatch({
      type: actionTypes.RETRIEVE_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setProductPriceFilter = (price) => {
  return { type: actionTypes.SET_PRODUCT_PRICE_FILTER, price: price };
};

// Attributes
export const addAttribute = (id, data) => async (dispatch) => {
  try {
    const res = await ProductsService.addAttribute(id, data);
    dispatch({
      type: actionTypes.ADD_ATTRIBUTE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateAttribute = (id, data) => async (dispatch) => {
  try {
    const res = await ProductsService.updateAttribute(id, data);
    dispatch({
      type: actionTypes.UPDATE_ATTRIBUTE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeAttribute = (id, data) => async (dispatch) => {
  try {
    const res = await ProductsService.removeAttribute(id, data);
    dispatch({
      type: actionTypes.REMOVE_ATTRIBUTE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
