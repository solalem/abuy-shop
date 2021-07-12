import CartList from './CartList';
import CreateCart from './CreateCart';
import CartDetails from './CartDetails';

const CartModule = {
    routeProps: [
        {
            path: '/carts',
            exact: true,
            component: CartList
        },
        {
            path: '/carts/new',
            exact: true,
            component: CreateCart
        },
        {
            path: '/carts/:id',
            exact: true,
            component: CartDetails
        }
    ],
    navigation: {
      permission: [],
      label: 'Carts',
      theme: 'carts',
    },
    name: 'Carts',
}
export default CartModule;
