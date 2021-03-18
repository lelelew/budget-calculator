import { useEffect, useState } from "react";
import { getItems } from "../services/item-service";
import { Item } from "../types/item";

/**
 * Hook that asynchronously loads the available
 * set of Items from remote storage.
 *
 * @returns array of Items type
 */
export function useItems(): Item[] {
  const [items, setItems] = useState<Item[]>([]);
  async function load() {
    const result = await getItems();
    setItems(result);
  }
  // this useEffect only runs one time upon mounting
  useEffect(() => {
    load();
  }, []);
  return items;
}
