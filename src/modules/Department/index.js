import DepartmentList from './DepartmentList';
import CreateDepartment from './CreateDepartment';
import DepartmentDetails from './DepartmentDetails';

const DepartmentModule = {
    routeProps: [
        {
            path: '/departments',
            exact: true,
            component: DepartmentList
        },
        {
            path: '/departments/new',
            exact: true,
            component: CreateDepartment
        },
        {
            path: '/departments/:id',
            exact: true,
            component: DepartmentDetails
        }
    ],
    navigation: {
      permission: [],
      label: 'Departments',
      theme: 'departments',
    },
    name: 'Departments',
}
export default DepartmentModule;
