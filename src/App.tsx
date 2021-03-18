import React from "react";
import "./App.css";
import { useItems } from "./hooks/use-items";

function App() {
  const itemsList = useItems();

  return (
    <div className="App">
      {itemsList.map((item, index) => (
        <p key={`${item.type} ${item.name} ${index}`}>
          {item.type}
          {item.name}
          {item.lowPrice}
          {item.highPrice}
        </p>
      ))}
    </div>
  );
}

export default App;
