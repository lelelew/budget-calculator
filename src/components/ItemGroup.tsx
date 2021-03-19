import React from "react";
import { Item } from "../types/item";
import { ItemOption } from "./ItemOption";

interface Props {
  items: Item[];
  name: string;
}

export const ItemGroup: React.FC<Props> = (props) => {
  return (
    <div>
      {props.name}
      {props.items.map((item, index) => {
        return <ItemOption key={`${item.name} ${index}`} item={item} />;
      })}
    </div>
  );
};
