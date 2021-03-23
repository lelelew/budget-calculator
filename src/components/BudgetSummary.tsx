import React, { useContext, useState } from "react";
import { Item } from "../types/item";
import { AppContext } from "../context/AppContext";
import { useItems } from "../hooks/use-items";
import { groupItemsByType } from "../util/group-items-by-type";
import { ItemGroup } from "./ItemGroup";

import { FormikHelpers, useFormik } from "formik";

import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

interface Props {}

interface BudgetForm {
  budget: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

export const BudgetSummary: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);

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

  return (
    <div>
      Budget Summary
      <div>
        Set your budget. Current budget: {state.budget}
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
      </div>
    </div>
  );
};
