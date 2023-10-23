import React from "react";
import { Provider } from "react-redux";

import createStore from "./src/store/createStore";

import { ThemeProvider } from "./src/context/ThemeContext";

export default ({ element }) => {
  const store = createStore();
  return (
    <Provider store={store}>
      <ThemeProvider>{element}</ThemeProvider>
    </Provider>
  );
};
