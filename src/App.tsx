import React from "react";
import "./App.css";
import { BudgetCalculator } from "./components/BudgetCalculator";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1 className="Budget-Calculator">Budget Calculator</h1>
        <div>
          <BudgetCalculator />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
