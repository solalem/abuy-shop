import * as ActionTypes from "./actionTypes";

const initialState = {
  purchaseOrders: [],
  currentPurchaseOrder: null
};

const purchaseOrdersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_PURCHASEORDER:
      return [...state.purchaseOrders, payload];

    case ActionTypes.UPDATE_PURCHASEORDER:
      return state.purchaseOrders.map((PurchaseOrder) => {
        if (PurchaseOrder.id === payload.id) {
          return {
            ...PurchaseOrder,
            ...payload,
          };
        } else {
          return PurchaseOrder;
        }
      });

    case ActionTypes.DELETE_PURCHASEORDER:
      return state.purchaseOrders.filter(({ id }) => id !== payload.id);

    case ActionTypes.RETRIEVE_PURCHASEORDERS:
      return {
        ...state,
        purchaseOrders: payload
      };

    case ActionTypes.SET_PURCHASEORDER_PRICE_FILTER:
      let PurchaseOrderPriceFilter = state.priceFilter;
      PurchaseOrderPriceFilter = {
        ...PurchaseOrderPriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: PurchaseOrderPriceFilter,
      };

    // OrderLines
    case ActionTypes.ADD_ORDERLINE:
      return [...state.currentPurchaseOrder.orderLines, payload];

    case ActionTypes.UPDATE_ORDERLINE:
      return state.currentPurchaseOrder.orderLines.map((i) => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload,
          };
        } else {
          return i;
        }
      });

    case ActionTypes.REMOVE_ORDERLINE:
      return state.currentPurchaseOrder.orderLines.filter(({ id }) => id !== payload.id);

    default:
      return {
        ...state,
      };
  }
};

export default purchaseOrdersReducer;
