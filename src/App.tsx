import { makeStyles } from "@material-ui/core";
import React from "react";
import "./App.css";
import { BudgetCalculator } from "./components/BudgetCalculator";
import { AppProvider } from "./context/AppContext";

const useStyles = makeStyles({
  app: {
    padding: "4rem",
  },
});

function App() {
  const classes = useStyles();

  return (
    <AppProvider>
      <div className={classes.app}>
        <BudgetCalculator />
      </div>
    </AppProvider>
  );
}

export default App;
