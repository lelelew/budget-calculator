import React, { useContext, useState } from "react";
import { Item } from "../types/item";
import { AppContext } from "../context/AppContext";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";

import { CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { displayPriceInDollars } from "../util/display-price-in-dollars";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  itemName: {},
  itemPrice: {},
});

interface Props {
  item: Item;
}

export const ItemOption: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);
  const chosenItem = state.chosenItems[props.item.type];
  const isChosenItem = chosenItem && props.item.name === chosenItem.name;

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch({
      type: "ADD_ITEM",
      payload: props.item,
    });
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography
          className={classes.itemName}
          color="textSecondary"
          gutterBottom
        >
          {props.item.name} {isChosenItem && <strong>Chosen</strong>}
        </Typography>

        <Typography
          className={classes.itemPrice}
          color="textSecondary"
          gutterBottom
        >
          Price: {displayPriceInDollars(props.item.lowPrice)} -{" "}
          {displayPriceInDollars(props.item.highPrice)}
        </Typography>
        <CardActions onClick={onClick}>
          <Button size="small">Select Item</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
