// remove underscores from itemType string

export function displayItemType(itemType: string) {
  let newString = itemType.replace(/_/g, " ");
  return newString;
}
