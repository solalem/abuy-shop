import ListingList from './ListingList';
import CreateListing from './CreateListing';
import ListingDetails from './ListingDetails';

const ListingModule = {
    routeProps: [
        {
            path: '/listings',
            exact: true,
            component: ListingList
        },
        {
            path: '/listings/new',
            exact: true,
            component: CreateListing
        },
        {
            path: '/listings/:id',
            exact: true,
            component: ListingDetails
        }
    ],
    navigation: {
      permission: [],
      label: 'Listings',
      theme: 'listings',
    },
    name: 'Listings',
}
export default ListingModule;
