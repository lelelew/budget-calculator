import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { displayPriceInDollars } from "../util/display-price-in-dollars";
import { FormikHelpers, useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { Item } from "../types/item";

interface Props {}

interface BudgetForm {
  budget: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid black",
    padding: "0 30px",
  },
  margin: {
    margin: theme.spacing(1),
  },

  textField: {
    width: "25ch",
  },
  withinBudget: {
    color: "green",
  },
  overlappingBudget: {
    color: "grey",
  },
  outsideBudget: {
    color: "red",
  },
  chosenItems: {
    textAlign: "left",
  },
  itemPrice: {
    textAlign: "right",
  },
  chosenItemsPrice: {
    textAlign: "right",
    paddingTop: "15px",
  },
  addMargin: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  lineItem: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    paddingLeft: 0,
  },
  lineItems: {
    // marginBlockStart: 0,
    // marginBlockEnd: 0,
    paddingInlineStart: 0,
    listStyleType: "none",
  },
}));

export const BudgetSummary: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);

  // Formik allows easy access of the form value when setting budget
  const formik = useFormik({
    initialValues: {
      budget: state.budget,
    },
    onSubmit: (values: BudgetForm, helpers: FormikHelpers<BudgetForm>) => {
      dispatch({
        type: "SET_BUDGET",
        budget: values.budget,
      });
    },
  });

  const chosenItems = state.chosenItems ? state.chosenItems : null;

  let chosenItemsKeys: Array<string> = [];
  let chosenItemsArray: Array<Item> = [];
  let chosenItemsLowPrice: number = 0;
  let chosenItemsHighPrice: number = 0;

  if (chosenItems) {
    chosenItemsKeys = Object.keys(chosenItems);

    for (let i = 0; i < chosenItemsKeys.length; i++) {
      let item = chosenItems[chosenItemsKeys[i]];
      chosenItemsArray.push(item);
      chosenItemsLowPrice += item.lowPrice;
      chosenItemsHighPrice += item.highPrice;
    }
  }

  // Checks to see if the price of the items chosen fall within the set budget range
  function checkBudgetStatus() {
    const lowerPriceIsOk = state.budget >= chosenItemsLowPrice / 100;
    const higherPriceIsOk = state.budget >= chosenItemsHighPrice / 100;
    if (lowerPriceIsOk && higherPriceIsOk) {
      return {
        message: "Your budget is good!",
        className: classes.withinBudget,
      };
    } else if (lowerPriceIsOk) {
      return {
        message: "The higher range of your items is out of budget.",
        className: classes.overlappingBudget,
      };
    } else {
      return {
        message: "Your selections are out of your budget.",
        className: classes.outsideBudget,
      };
    }
  }

  const budgetStatus = checkBudgetStatus();

  // This component could probably be broken up into smaller components
  return (
    <div className={classes.root}>
      <h2>Budget Calculator</h2>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Budget</InputLabel>
            <OutlinedInput
              id="budget"
              name="budget"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              labelWidth={60}
              type="number"
              value={formik.values.budget}
              onChange={formik.handleChange}
            />
          </FormControl>
        </form>
        <span>
          Current set budget: ${state.budget}
          <br />
          <small className={budgetStatus.className}>
            {budgetStatus.message}
          </small>
        </span>
      </div>
      <Divider variant="middle" className={classes.addMargin} />
      <div className={classes.chosenItems}>
        <h3>Chosen Items</h3>
        <ul className={classes.lineItems}>
          {chosenItemsArray.map((item, index) => (
            <li key={index} className={classes.lineItem}>
              {" "}
              <Typography>{item.name}</Typography>
              <Typography className={classes.itemPrice}>
                {displayPriceInDollars(item.lowPrice)} to{" "}
                {displayPriceInDollars(item.highPrice)}
              </Typography>
            </li>
          ))}
        </ul>
        <Typography variant="caption">
          Pick an item from each category you're interested in to build your
          budget.
        </Typography>
      </div>
      <Divider variant="middle" className={classes.addMargin} />
      <div>
        <div>
          Price Range of Chosen Items:
          <br />
          <Typography className={classes.chosenItemsPrice}>
            {displayPriceInDollars(chosenItemsLowPrice)} to{" "}
            {displayPriceInDollars(chosenItemsHighPrice)}
          </Typography>
        </div>
      </div>
    </div>
  );
};
