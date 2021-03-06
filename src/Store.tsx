import React, { createContext } from "react";

interface IState {
  episodes: [];
  favourites: [];
}

const initialState: IState = {
  episodes: [],
  favourites: []
};

export const Store = createContext<IState>(initialState);

function reducer() {}

export function StoreProvider(props: any): JSX.Element {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>;
}
