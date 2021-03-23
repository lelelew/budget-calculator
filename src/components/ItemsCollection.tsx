import React from "react";
import { useItems } from "../hooks/use-items";
import { groupItemsByType } from "../util/group-items-by-type";
import { ItemGroup } from "./ItemGroup";
import { makeStyles } from "@material-ui/core/styles";

interface Props {}

const useStyles = makeStyles({
  root: {
    border: 0,
    padding: "0 30px",
    textAlign: "left",
  },
});

export const ItemsCollection: React.FC<Props> = () => {
  const itemsList = useItems();
  const classes = useStyles();
  const groupedItems = groupItemsByType(itemsList);
  const itemTypes = Object.keys(groupedItems);

  console.log(groupedItems);
  return (
    <div className={classes.root}>
      {itemTypes.map((type, index) => (
        <div key={type}>
          <ItemGroup items={groupedItems[type]} name={type} />
        </div>
      ))}
    </div>
  );
};
