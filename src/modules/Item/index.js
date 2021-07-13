import ItemIndex from './ItemIndex';
import CreateItem from './CreateItem';
import ItemDetails from './ItemDetails';

const ItemModule = {
  routeProps: [
    {
      path: '/items',
      exact: true,
      component: ItemIndex
    },
    {
      path: '/items/new',
      exact: true,
      component: CreateItem
    },
    {
      path: '/items/:id',
      exact: true,
      component: ItemDetails
    }
  ],
  navigation: {
    permission: [],
    label: 'Items',
    theme: 'items',
  },
  name: 'Items',
}
export default ItemModule;
