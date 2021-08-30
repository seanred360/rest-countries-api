import _ from "lodash";

export function sort(sortCategory, sortValue, itemsToFilter) {
  // grab the items from the array that match the sort parameters
  const filtered =
    sortCategory && sortValue
      ? itemsToFilter.filter((item) => item[sortCategory].includes(sortValue))
      : itemsToFilter;

  // order the filtered array of items based on the category. Example: order the filtered items by their name or region
  const sorted = _.orderBy(filtered, sortCategory, "asc");

  return { sorted };
}
