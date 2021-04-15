import React, { createContext, Reducer, useEffect, useReducer, useState } from 'react';

import { getIntialState, persistState } from '../utils/persist-state';

const STORAGE_KEY = 'sessionState';

const Types = {
  SET_CURRENT_USER: "session/SET_CURRENT_USER",
  EXPULSE_USER: "session/EXPULSE_USER",
  GET_CURRENT_USER_STATE: "session/GET_CURRENT_USER_STATE"
}

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
}

type Actions = {
  type: "SET_CURRENT_USER"|"EXPULSE_USER"|"GET_CURRENT_USER_STATE";
  payload: any;
}

type ActionFunctions = {
  setCurrentUser: (user: User) => void;
  expulseCurrentUser: () => void;
  getCurrentUserState: (state: InitialState) => void;
}

interface InitialState {
  user: User|undefined
}

interface ContextProps {
  state: InitialState;
  actions: ActionFunctions;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const SessionContext = createContext({} as ContextProps);

const defaultState: InitialState = {
  user: undefined
}

function SessionProvider({children}: ProviderProps) {

  const [initialState, setInitialState] = useState<InitialState>(defaultState);
  const [state, dispatch] = useReducer<Reducer<InitialState, any>>(reducer, initialState);

  useEffect(() => {
    async function loadInitialStateAndCurrentState() {
      setInitialState(await getIntialState(STORAGE_KEY) ?? defaultState);
      dispatch(actions.getCurrentUserState(await getIntialState(STORAGE_KEY) ?? defaultState));
    }
    loadInitialStateAndCurrentState();
  }, []);

  useEffect(() => {
    if(state.user != initialState.user) {
      persistState(STORAGE_KEY, state);
    }
  }, [state]);

  function reducer(state: InitialState, action: Actions) {
    switch (action.type) {
      case Types.SET_CURRENT_USER:
        return {
          ...state,
          user: action.payload
        };
      case Types.EXPULSE_USER:
        return {
          ...state,
          user: null
        }
      case Types.GET_CURRENT_USER_STATE:
        state = action.payload;
        return {...state}
      default:
        return state;
    }
  }

  const actions = {
    setCurrentUser: async (user: User) => {
      return dispatch({
        type: Types.SET_CURRENT_USER,
        payload: user
      });
    },
    expulseCurrentUser: async () => {
      return dispatch({
        type: Types.EXPULSE_USER,
      });
    },
    getCurrentUserState: async (state: InitialState) => {
      return dispatch({
        type: Types.GET_CURRENT_USER_STATE,
        payload: state
      });
    }
  }

  return(
    <SessionContext.Provider value={{ state, actions }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;