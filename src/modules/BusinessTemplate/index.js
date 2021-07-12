import BusinessTemplateList from './BusinessTemplateList';
import CreateBusinessTemplate from './CreateBusinessTemplate';
import BusinessTemplateDetails from './BusinessTemplateDetails';

const BusinessTemplateModule = {
    routeProps: [
        {
            path: '/business-templates',
            exact: true,
            component: BusinessTemplateList
        },
        {
            path: '/business-templates/new',
            exact: true,
            component: CreateBusinessTemplate
        },
        {
            path: '/business-templates/:id',
            exact: true,
            component: BusinessTemplateDetails
        }
    ],
    navigation: {
      permission: [],
      label: 'BusinessTemplates',
      theme: 'businessTemplates',
    },
    name: 'BusinessTemplates',
}
export default BusinessTemplateModule;
