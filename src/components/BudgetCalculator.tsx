import React from "react";
import { ItemsCollection } from "./ItemsCollection";

interface Props {}

export const BudgetCalculator: React.FC<Props> = () => {
  return (
    <div>
      Budget Calculator
      <div>
        <ItemsCollection />
      </div>
    </div>
  );
};
