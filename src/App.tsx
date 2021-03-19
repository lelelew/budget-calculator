import React from "react";
import "./App.css";
import { BudgetCalculator } from "./components/BudgetCalculator";
import { useItems } from "./hooks/use-items";

function App() {
  return (
    <div className="App">
      <h1 className="Budget-Calculator">Budget Calculator</h1>
      <div>
        <BudgetCalculator />
      </div>
    </div>
  );
}

export default App;
