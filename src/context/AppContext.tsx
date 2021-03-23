import React, { createContext, useReducer } from "react";
import { Item } from "../types/item";

interface State {
  budget: number;
  chosenItems: Record<string, Item>;
}

interface Action {
  type: "ADD_ITEM" | "SET_BUDGET";
  payload?: Item;
  budget?: number;
}

const AppReducer = (state: State, action: Action) => {
  // console.log("AppReducer", state, action);
  switch (action.type) {
    case "ADD_ITEM": {
      const newState = {
        ...state,
      };
      if (action.payload) {
        const itemType = action.payload.type;
        newState.chosenItems[itemType] = action.payload;
      }
      return newState;
    }
    case "SET_BUDGET": {
      const newState = {
        ...state,
      };
      if (action.budget) {
        newState.budget = action.budget;
      }
      return newState;
    }
    default:
      return state;
  }
};

const initialState = {
  budget: 100000,
  chosenItems: {},
};

export const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

interface Props {
  children: React.ReactNode;
}

export const AppProvider = (props: Props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
