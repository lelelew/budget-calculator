import React from "react";
import "./App.css";
import { BudgetCalculator } from "./components/BudgetCalculator";

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
