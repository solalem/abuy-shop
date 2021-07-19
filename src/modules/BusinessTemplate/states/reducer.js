import * as ActionTypes from "./actionTypes";

const initialState = {
  businessTemplates: [],
  currentBusinessTemplate: null
};

const businessTemplatesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_BUSINESSTEMPLATE:
      return [...state.businessTemplates, payload];

    case ActionTypes.UPDATE_BUSINESSTEMPLATE:
      return state.businessTemplates.map((BusinessTemplate) => {
        if (BusinessTemplate.id === payload.id) {
          return {
            ...BusinessTemplate,
            ...payload,
          };
        } else {
          return BusinessTemplate;
        }
      });

    case ActionTypes.DELETE_BUSINESSTEMPLATE:
      return state.businessTemplates.filter(({ id }) => id !== payload.id);

    case ActionTypes.RETRIEVE_BUSINESSTEMPLATES:
      return {
        ...state,
        businessTemplates: payload.items
      };

    case ActionTypes.SET_BUSINESSTEMPLATE_PRICE_FILTER:
      let BusinessTemplatePriceFilter = state.priceFilter;
      BusinessTemplatePriceFilter = {
        ...BusinessTemplatePriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: BusinessTemplatePriceFilter,
      };

    case ActionTypes.GET_BY_DEPARTMENTID:
      return {
        ...state,
        businessTemplates: payload.items
      };


    default:
      return {
        ...state,
      };
  }
};

export default businessTemplatesReducer;
