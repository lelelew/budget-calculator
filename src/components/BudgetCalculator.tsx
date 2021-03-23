import React from "react";
import { BudgetSummary } from "./BudgetSummary";
import { ItemsCollection } from "./ItemsCollection";

import Box from "@material-ui/core/Box";

interface Props {}

export const BudgetCalculator: React.FC<Props> = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" flexDirection="row">
        <Box flexGrow={2}>
          <ItemsCollection />
        </Box>
        <Box flexGrow={1}>
          <BudgetSummary />
        </Box>
      </Box>
    </div>
  );
};
