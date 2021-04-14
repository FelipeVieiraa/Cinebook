import React, { createContext, Reducer, useEffect, useReducer, useState } from 'react';

import { getIntialState, persistState } from '../utils/persist-state';

const STORAGE_KEY = 'usersState';

const Types = {
  ADD_USER: "users/ADD_USER",
  DELETE_USER: "users/DELETE_USER",
  GET_USERS: "users/GET_USERS"
}

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
}

type Actions = {
  type: "ADD"|"DELETE"|"GET_USERS";
  payload: any;
}

type ActionFunctions = {
  addUser: (user: User) => void;
}

interface InitialState {
  list: Array<User>;
  fallbackList: Array<User>;
  loading: boolean;
}

interface ContextProps {
  state: InitialState;
  actions: ActionFunctions;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const UsersContext = createContext({} as ContextProps);

const defaultState: InitialState = {
  list: [],
  fallbackList: [],
  loading: false
}

function UsersProvider({children}: ProviderProps) {

  const [initialState, setInitialState] = useState({
    list: [],
    fallbackList: [],
    loading: false
  });
  const [state, dispatch] = useReducer<Reducer<InitialState, any>>(reducer, initialState);

  useEffect(() => {
    async function loadInitialStateAndCurrentState() {
      setInitialState(await getIntialState(STORAGE_KEY) ?? defaultState);
      dispatch(actions.getUsers(await getIntialState(STORAGE_KEY) ?? defaultState));
    }
    loadInitialStateAndCurrentState();
  }, []);

  useEffect(() => {
    if(state.list != initialState.list) {
      persistState(STORAGE_KEY, state);
    }
  }, [state]);

  function reducer(state: InitialState, action: Actions) {
    switch (action.type) {
      case Types.ADD_USER:
        state.fallbackList = state.list;
        return {
          ...state,
          list: [...state.list, action.payload],
          loading: true 
        };
      case Types.GET_USERS:
        state = action.payload;
        return {...state};
      default:
        return state;
    }
  }

  const actions = {
    addUser: async (user: User) => {
      return dispatch({
        type: Types.ADD_USER,
        payload: user
      });
    },
    getUsers: async (users: Array<User>) => {
      return dispatch({
        type: Types.GET_USERS,
        payload: users
      });
    }
  }

  return(
    <UsersContext.Provider value={{ state, actions }}>
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;