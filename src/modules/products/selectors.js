import { VISIBILITY_FILTERS } from "../../static/constants";

export const getProducts = (store) => store.products.products;
export const getProductPriceFilter = (store) => store.products.priceFilter;

export const getProductsByFilter = (store, visibilityFilter, count = null) => {
  const allProducts = getProducts(store);
  const filterPrices = getProductPriceFilter(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.MEN:
    case VISIBILITY_FILTERS.WOMEN:
    case VISIBILITY_FILTERS.KIDS:
      return allProducts.filter(
        (product) =>
          product.category === visibilityFilter &&
          product.price < filterPrices.pricerange
      );
    case VISIBILITY_FILTERS.SALE:
      if (count) {
        return allProducts.filter((product, index) => {
          if (product.sale === true && index < 6) {
            return true;
          }
          return false;
        });
      } else {
        return allProducts.filter(
          (product) =>
            product.sale === true && product.price < filterPrices.pricerange
        );
      }
    case VISIBILITY_FILTERS.ALL:
    default:
      return allProducts.filter((product) => {
        return product.price < filterPrices.pricerange;
      });
  }
};
