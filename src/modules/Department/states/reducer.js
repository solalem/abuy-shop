import * as ActionTypes from "./actionTypes";

const initialState = {
  departments: [],
  currentDepartment: null
};

const departmentsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_DEPARTMENT:
      return [...state.departments, payload];

    case ActionTypes.UPDATE_DEPARTMENT:
      return state.departments.map((Department) => {
        if (Department.id === payload.id) {
          return {
            ...Department,
            ...payload,
          };
        } else {
          return Department;
        }
      });

    case ActionTypes.DELETE_DEPARTMENT:
      return state.departments.filter(({ id }) => id !== payload.id);

    case ActionTypes.RETRIEVE_DEPARTMENTS:
      return {
        ...state,
        departments: payload.items
      };

    case ActionTypes.SET_DEPARTMENT_PRICE_FILTER:
      let DepartmentPriceFilter = state.priceFilter;
      DepartmentPriceFilter = {
        ...DepartmentPriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: DepartmentPriceFilter,
      };



    default:
      return {
        ...state,
      };
  }
};

export default departmentsReducer;
