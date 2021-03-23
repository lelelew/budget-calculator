import React, { useContext } from "react";
import { Item } from "../types/item";
import { AppContext } from "../context/AppContext";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { displayPriceInDollars } from "../util/display-price-in-dollars";

const useStyles = makeStyles({
  button: {
    background: "rgba(255, 255, 255, 1)",
    border: "1px solid rgba(0, 0, 0, 0.5)",
    borderRadius: 6,
    padding: "0.25rem 0.5rem",
    cursor: "pointer",
  },
  chosenButton: {
    background: "rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(0, 0, 0, 0.5)",
    borderRadius: 6,
    padding: "0.25rem 0.5rem",
    cursor: "pointer",
    "&:active": {
      border: "1px solid rgba(0, 0, 0, 0.5)",
    },
  },
  itemName: {
    fontWeight: 700,
  },
  itemPrice: {
    fontSize: "0.8rem",
  },
});

interface Props {
  item: Item;
}

export const ItemOption: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);
  const chosenItem = state.chosenItems[props.item.type];
  const isChosenItem = chosenItem && props.item.name === chosenItem.name;

  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch({
      type: "ADD_ITEM",
      payload: props.item,
    });
  };

  const className = isChosenItem ? classes.chosenButton : classes.button;

  return (
    <button className={className} onClick={onClick}>
      <Typography
        className={classes.itemName}
        color="textSecondary"
        gutterBottom
        component="div"
      >
        {props.item.name}
      </Typography>

      <Typography
        className={classes.itemPrice}
        color="textSecondary"
        component="div"
        gutterBottom
      >
        Price: {displayPriceInDollars(props.item.lowPrice)} -{" "}
        {displayPriceInDollars(props.item.highPrice)}
      </Typography>
    </button>
  );
};
