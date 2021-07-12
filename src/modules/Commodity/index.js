import CommodityList from './CommodityList';
import CreateCommodity from './CreateCommodity';
import CommodityDetails from './CommodityDetails';

const CommodityModule = {
    routeProps: [
        {
            path: '/commodities',
            exact: true,
            component: CommodityList
        },
        {
            path: '/commodities/new',
            exact: true,
            component: CreateCommodity
        },
        {
            path: '/commodities/:id',
            exact: true,
            component: CommodityDetails
        }
    ],
    navigation: {
      permission: [],
      label: 'Commodities',
      theme: 'commodities',
    },
    name: 'Commodities',
}
export default CommodityModule;
