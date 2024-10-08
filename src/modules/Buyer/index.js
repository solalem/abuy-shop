import BuyerIndex from './BuyerIndex';
import CreateBuyer from './CreateBuyer';
import BuyerDetails from './BuyerDetails';

const BuyerModule = {
  routeProps: [
    {
      path: '/buyers',
      exact: true,
      component: BuyerIndex
    },
    {
      path: '/buyers/new',
      exact: true,
      component: CreateBuyer
    },
    {
      path: '/buyers/:id',
      exact: true,
      component: BuyerDetails
    }
  ],
  navigation: {
    permission: [],
    label: 'Buyers',
    theme: 'buyers',
  },
  name: 'Buyers',
}
export default BuyerModule;
