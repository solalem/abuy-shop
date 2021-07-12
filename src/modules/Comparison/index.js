import ComparisonList from './ComparisonList';
import CreateComparison from './CreateComparison';
import ComparisonDetails from './ComparisonDetails';

const ComparisonModule = {
    routeProps: [
        {
            path: '/comparisons',
            exact: true,
            component: ComparisonList
        },
        {
            path: '/comparisons/new',
            exact: true,
            component: CreateComparison
        },
        {
            path: '/comparisons/:id',
            exact: true,
            component: ComparisonDetails
        }
    ],
    navigation: {
      permission: [],
      label: 'Comparisons',
      theme: 'comparisons',
    },
    name: 'Comparisons',
}
export default ComparisonModule;
