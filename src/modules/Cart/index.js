import CartIndex from './CartIndex';
import CreateCart from './CreateCart';
import CartDetails from './CartDetails';

const CartModule = {
  routeProps: [
    {
      path: '/carts',
      exact: true,
      component: CartIndex
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
