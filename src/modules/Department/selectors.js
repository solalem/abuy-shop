import { VISIBILITY_FILTERS } from "../../static/constants";

export const getDepartments = (store) => store.departments.departments;
export const getDepartmentPriceFilter = (store) => store.departments.priceFilter;

export const getDepartmentsByFilter = (store, visibilityFilter, count = null) => {
  const allDepartments = getDepartments(store);
  const filterPrices = getDepartmentPriceFilter(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.MEN:
    case VISIBILITY_FILTERS.WOMEN:
    case VISIBILITY_FILTERS.KIDS:
      return allDepartments.filter(
        (Department) =>
          Department.category === visibilityFilter &&
          Department.price < filterPrices.pricerange
      );
    case VISIBILITY_FILTERS.SALE:
      if (count) {
        return allDepartments.filter((Department, index) => {
          if (Department.sale === true && index < 6) {
            return true;
          }
          return false;
        });
      } else {
        return allDepartments.filter(
          (Department) =>
            Department.sale === true && Department.price < filterPrices.pricerange
        );
      }
    case VISIBILITY_FILTERS.ALL:
    default:
      return allDepartments.filter((Department) => {
        return Department.price < filterPrices.pricerange;
      });
  }
};
