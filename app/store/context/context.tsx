import React, { createContext, useContext, useReducer } from "react";

interface ContextState {
  loader?: boolean;
  updateLoader?: any;
  uploadedFile?: string | undefined;
  updateFile?: any;
}

export const initialState: ContextState = {
  loader: true,
  uploadedFile: "",
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
    case "UPLOAD_FILE":
      return {
        ...state,
        uploadedFile: payload.uploadedFile,
      };
    default:
      break;
  }
};

export const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const updateLoader = () => {
    dispatch({
      type: "UPDATE_LOADER",
      payload: {
        loader: false,
      },
    });
  };

  const updateFile = (file: any) => {
    dispatch({
      type: "UPLOAD_FILE",
      payload: {
        uploadedFile: file,
      },
    });
  };

  const value = {
    loader: state.loader,
    uploadedFile: state.uploadedFile,
    updateLoader,
    updateFile,
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
