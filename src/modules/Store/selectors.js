import { VISIBILITY_FILTERS } from "../../static/constants";

export const getStores = (store) => store.stores.stores;
export const getStorePriceFilter = (store) => store.stores.priceFilter;

export const getStoresByFilter = (store, visibilityFilter, count = null) => {
  const allStores = getStores(store);
  const filterPrices = getStorePriceFilter(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.MEN:
    case VISIBILITY_FILTERS.WOMEN:
    case VISIBILITY_FILTERS.KIDS:
      return allStores.filter(
        (Store) =>
          Store.category === visibilityFilter &&
          Store.price < filterPrices.pricerange
      );
    case VISIBILITY_FILTERS.SALE:
      if (count) {
        return allStores.filter((Store, index) => {
          if (Store.sale === true && index < 6) {
            return true;
          }
          return false;
        });
      } else {
        return allStores.filter(
          (Store) =>
            Store.sale === true && Store.price < filterPrices.pricerange
        );
      }
    case VISIBILITY_FILTERS.ALL:
    default:
      return allStores.filter((Store) => {
        return Store.price < filterPrices.pricerange;
      });
  }
};
