import React, { Component } from "react";
import { Text } from "react-native";

import styled from "styled-components";

import PlantDetailsScreen from "./PlantDetailsScreen";

class PlantDetailsScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.name : "Details",
      headerTitleStyle: {
        fontFamily: "Open Sans"
      },
      headerStyle: {
        backgroundColor: "white",
        borderBottomWidth: 0,
        paddingTop: 30,
        paddingBottom: 10
      },
      headerTitleStyle: {
        fontFamily: "Open Sans",
        fontSize: 15,
        fontWeight: "bold"
      },
    };
  };

  render() {
    const { params } = this.props.navigation.state;
    const name = params ? params.name : null;
    return (
      <PlantDetailsScreen name={name} />
    );
  }
}

export default PlantDetailsScreenContainer;
