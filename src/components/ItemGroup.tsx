import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Item } from "../types/item";
import { displayItemType } from "../util/display-item-type";
import { ItemOption } from "./ItemOption";

const useStyles = makeStyles({
  group: {
    margin: "3rem 0 6rem 0",
  },
  options: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  },
  groupName: {
    borderBottom: "3px solid rgba(0, 0, 0, 0.1)",
    paddingBottom: "0.75rem",
    marginBottom: "1.5rem",
    fontSize: "1.2rem",
  },
});

interface Props {
  items: Item[];
  name: string;
}

export const ItemGroup: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.group}>
      <Typography className={classes.groupName}>
        {displayItemType(props.name)}
      </Typography>
      <div className={classes.options}>
        {props.items.map((item, index) => {
          return <ItemOption key={`${item.name} ${index}`} item={item} />;
        })}
      </div>
    </div>
  );
};
