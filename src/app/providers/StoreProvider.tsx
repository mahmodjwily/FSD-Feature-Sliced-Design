import { ReactNode } from "react";

import { Provider } from "react-redux";

import { store } from "../stores/store";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
