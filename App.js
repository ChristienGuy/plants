/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import HomeScreenContainer from "./components/home/HomeScreenContainer";
import PlantDetailsScreenContainer from "./components/plant-details/PlantDetailsScreenContainer";

import { StackNavigator } from "react-navigation";

type Props = {};
const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreenContainer
    },
    Details: {
      screen: PlantDetailsScreenContainer
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
