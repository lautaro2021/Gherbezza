import React, { createContext, useContext, useReducer } from "react";

interface ContextState {
  loader?: boolean;
  updateLoader?: any;
}

export const initialState: ContextState = {
  loader: true,
};

export const AppLocalContext = createContext(initialState);

export const appReducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_LOADER":
      return {
        ...state,
        loader: payload.loader,
      };
    default:
      break;
  }
};

export const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const updateLoader = () => {
    console.log("entra");
    dispatch({
      type: "UPDATE_LOADER",
      payload: {
        loader: false,
      },
    });
  };

  const value = {
    loader: state.loader,
    updateLoader,
  };

  return (
    <AppLocalContext.Provider value={value}>
      {children}
    </AppLocalContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppLocalContext);
};
