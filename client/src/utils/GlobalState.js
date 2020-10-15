import React, { createContext, useReducer, useContext } from "react";
import {SIGN_UP,SIGN_IN} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SIGN_UP:
    return {
      ...state,
      currentUser: action.user,
      loading: false
    };

  case SIGN_IN:
    return {
      ...state,
      currentUser: action.user,
      loading: false
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    users: [],
    currentUser: {
      _id: 0,
      username: "",
      email: "",
      password: ""
    },
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
