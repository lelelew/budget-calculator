import React from "react";
import { useItems } from "../hooks/use-items";
import { Item } from "../types/item";
import { groupItemsByType } from "../util/group-items-by-type";
import { ItemGroup } from "./ItemGroup";

interface Props {}

export const ItemsCollection: React.FC<Props> = () => {
  const itemsList = useItems();
  const groupedItems = groupItemsByType(itemsList);
  const itemTypes = Object.keys(groupedItems);

  console.log(groupedItems);
  return (
    <div>
      Items Collection
      {itemTypes.map((type, index) => (
        <div key={type}>
          <ItemGroup items={groupedItems[type]} name={type} />
        </div>
      ))}
    </div>
  );
};
