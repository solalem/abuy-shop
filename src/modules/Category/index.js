import CategoryIndex from './CategoryIndex';
import CreateCategory from './CreateCategory';
import CategoryDetails from './CategoryDetails';

const CategoryModule = {
  routeProps: [
    {
      path: '/categories',
      exact: true,
      component: CategoryIndex
    },
    {
      path: '/categories/new',
      exact: true,
      component: CreateCategory
    },
    {
      path: '/categories/:id',
      exact: true,
      component: CategoryDetails
    }
  ],
  navigation: {
    permission: [],
    label: 'Categories',
    theme: 'categories',
  },
  name: 'Categories',
}
export default CategoryModule;
