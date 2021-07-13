import BundleIndex from './BundleIndex';
import CreateBundle from './CreateBundle';
import BundleDetails from './BundleDetails';

const BundleModule = {
  routeProps: [
    {
      path: '/bundles',
      exact: true,
      component: BundleIndex
    },
    {
      path: '/bundles/new',
      exact: true,
      component: CreateBundle
    },
    {
      path: '/bundles/:id',
      exact: true,
      component: BundleDetails
    }
  ],
  navigation: {
    permission: [],
    label: 'Bundles',
    theme: 'bundles',
  },
  name: 'Bundles',
}
export default BundleModule;
