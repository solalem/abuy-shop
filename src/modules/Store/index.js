import StoreList from './StoreList';
import CreateStore from './CreateStore';
import StoreDetails from './StoreDetails';

const StoreModule = {
    routeProps: [
        {
            path: '/stores',
            exact: true,
            component: StoreList
        },
        {
            path: '/stores/new',
            exact: true,
            component: CreateStore
        },
        {
            path: '/stores/:id',
            exact: true,
            component: StoreDetails
        }
    ],
    navigation: {
      permission: [],
      label: 'Stores',
      theme: 'stores',
    },
    name: 'Stores',
}
export default StoreModule;
