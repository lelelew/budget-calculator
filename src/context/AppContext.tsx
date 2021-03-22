import React, { createContext, useReducer } from "react";
import { Item } from "../types/item";

interface State {
  budget: number;
  chosenItems: Record<string, Item>;
}

interface Action {
  type: "ADD_ITEM";
  payload: Item;
}

const AppReducer = (state: State, action: Action) => {
  console.log("AppReducer", state, action);
  switch (action.type) {
    case "ADD_ITEM":
      const newState = {
        ...state,
      };

      const itemType = action.payload.type;

      newState.chosenItems[itemType] = action.payload;
      return newState;

    default:
      return state;
  }
};

const initialState = {
  budget: 200000,
  chosenItems: {
    GROUND_COVER: {
      type: "GROUND_COVER",
      name: "Pavers",
      lowPrice: 400000,
      highPrice: 800000,
    },
  },
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
