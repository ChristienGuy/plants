import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import store, { persistor } from "./store";

import { PersistGate } from "redux-persist/integration/react";
import AppNavigation from "./App";
import { Text } from "react-native";
import LoadingSpinner from "./components/shared/LoadingSpinner";

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
      <AppNavigation />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent("plants", () => Root);
