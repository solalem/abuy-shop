import ProductList from './ProductList';
import CreateProduct from './CreateProduct';
import ProductDetails from './ProductDetails';

const productModule = {
    routeProps: [
        {
            path: '/products',
            exact: true,
            component: ProductList
        },
        {
            path: '/products/new',
            exact: true,
            component: CreateProduct
        },
        {
            path: '/products/:id',
            exact: true,
            component: ProductDetails
        }
    ],
    navigation: {
      permission: [],
      label: 'Products',
      theme: 'products',
    },
    name: 'Products',
}
export default productModule;
