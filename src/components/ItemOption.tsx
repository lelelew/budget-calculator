import React from "react";
import { Item } from "../types/item";

interface Props {
  item: Item;
}

export const ItemOption: React.FC<Props> = (props) => {
  return <div>{props.item.name}</div>;
};
