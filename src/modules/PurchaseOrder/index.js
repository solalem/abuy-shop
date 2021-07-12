import PurchaseOrderList from './PurchaseOrderList';
import CreatePurchaseOrder from './CreatePurchaseOrder';
import PurchaseOrderDetails from './PurchaseOrderDetails';

const PurchaseOrderModule = {
    routeProps: [
        {
            path: '/purchase-orders',
            exact: true,
            component: PurchaseOrderList
        },
        {
            path: '/purchase-orders/new',
            exact: true,
            component: CreatePurchaseOrder
        },
        {
            path: '/purchase-orders/:id',
            exact: true,
            component: PurchaseOrderDetails
        }
    ],
    navigation: {
      permission: [],
      label: 'PurchaseOrders',
      theme: 'purchaseOrders',
    },
    name: 'PurchaseOrders',
}
export default PurchaseOrderModule;
