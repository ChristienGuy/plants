import { StackNavigator } from "react-navigation";
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener
} from "react-navigation-redux-helpers";

import { RootStackNavigator } from "../navigation/rootStackNavigator";

export const navMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navigation
);

// Initial States
const homeAction = RootStackNavigator.router.getActionForPathAndParams("home");
const homeState = RootStackNavigator.router.getStateForAction(homeAction);

const initialState = homeState

// Reducer
const navReducer = (state = initialState, action) => {
  const nextState = RootStackNavigator.router.getStateForAction(action, state);

  return nextState || state;
};

export default navReducer;
