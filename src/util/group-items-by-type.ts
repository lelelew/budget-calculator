import { Item } from "../types/item";

/**
 * Groups list of items by their item type property
 *
 * @param items array of items to be grouped by type
 * @returns object whose keys are item types and values are
 * arrays of items of that type
 */
export function groupItemsByType(items: Item[]) {
  // Setting the accumulator to type 'any' is probably not the best
  // way to perform this function, but it will capture new item types
  // whereas making an TypeScript interface with the item types listed
  // out would exclude any new item types added in the future.

  return items.reduce(function (acc: any, item: Item) {
    const key = item.type;
    const itemsGroup = acc[key] || [];

    // Use Array.some() to check whether a value exists in an array
    // This is used to filter out duplicate items
    const isDuplicate = itemsGroup.some((existingItem: Item) => {
      return existingItem.name === item.name;
    });

    // If item is not a duplicate, push to itemsGroup
    if (!isDuplicate) {
      itemsGroup.push(item);
    }

    // Set accumulator to itemsGroup
    acc[key] = itemsGroup;

    return acc;
  }, {});
}
