import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";

import styled from "styled-components";
import icon from "../plant-icon.png";

const ImageContainer = styled.View`
  width: 120px;
  height: 120px;
  background-color: #d1edca;

  border-radius: 100px;
  border-width: 1px;
  border-color: #004905;
  margin-bottom: 10px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const PlantIcon = styled.Image`
  max-width: 100%;
  flex: 1;
`

const Wrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-bottom: 50px;
`;

const Name = styled.Text`
  font-family: "Open Sans";
`;

export const PlantPreview = ({ plant, navigation }) => (
  <Wrapper
    onPress={() => {
      navigation.navigate("Details", {
        ...plant
      });
    }}
  >
    <ImageContainer>
      <PlantIcon source={icon} resizeMode="contain"/>
    </ImageContainer>
    <Name>{plant.name}</Name>
  </Wrapper>
);
