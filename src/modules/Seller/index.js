import SellerList from './SellerList';
import CreateSeller from './CreateSeller';
import SellerDetails from './SellerDetails';

const SellerModule = {
    routeProps: [
        {
            path: '/sellers',
            exact: true,
            component: SellerList
        },
        {
            path: '/sellers/new',
            exact: true,
            component: CreateSeller
        },
        {
            path: '/sellers/:id',
            exact: true,
            component: SellerDetails
        }
    ],
    navigation: {
      permission: [],
      label: 'Sellers',
      theme: 'sellers',
    },
    name: 'Sellers',
}
export default SellerModule;
