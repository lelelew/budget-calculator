import { Item } from "../types/item";

/**
 * Groups list of items by their item type property
 *
 * @param items array of items to be grouped by type
 * @returns object whose keys are item types and values are
 * arrays of items of that type
 */
export function groupItemsByType(items: Item[]) {
  return items.reduce(function (acc: any, item: Item) {
    let key = item.type;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
}
