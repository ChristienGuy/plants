import React, { Component } from "react";
import { TouchableOpacity, View, Text, Button } from "react-native";

import { PlantPreview } from "../PlantPreview";
import { AddNewPlantButton } from "../AddNewPlantButton";
import styled from "styled-components";

const Wrapper = styled.View`
  display: flex;

  padding-top: 40px;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  align-items: flex-start;
  background-color: #fff;
`;

const plants = [
  {
    id: 1,
    name: "Gary"
  },
  {
    id: 2,
    name: "Mitch"
  },
  {
    id: 3,
    name: "Mary"
  }
];

class HomeScreen extends Component<Props> {
  static navigationOptions = {
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
    title: "Your plants"
  };

  render() {
    const { navigation } = this.props;
    return (
      <Wrapper>
        {plants.map((plant, index) => (
          <PlantPreview key={index} plant={plant} navigation={navigation} />
        ))}
        <AddNewPlantButton navigation={this.props.navigation} />
      </Wrapper>
    );
  }
}

export default HomeScreen;
