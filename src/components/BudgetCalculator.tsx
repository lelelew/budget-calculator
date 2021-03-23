import React from "react";
import { Item } from "../types/item";
import { BudgetSummary } from "./BudgetSummary";
import { ItemsCollection } from "./ItemsCollection";

interface Props {}

export const BudgetCalculator: React.FC<Props> = (props) => {
  return (
    <div>
      Budget Calculator
      <div>
        <BudgetSummary />
      </div>
      <div>
        <ItemsCollection />
      </div>
    </div>
  );
};
