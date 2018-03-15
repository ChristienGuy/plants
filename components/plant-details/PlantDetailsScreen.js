import React from 'react';
import { Text } from "react-native";
import styled from "styled-components";

const Wrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #fff;
`;

const PlantDetailsScreen = ({ name }) => {
  return (
    <Wrapper>
      <Text>Details Screen</Text>
      <Text>{name}</Text>
    </Wrapper>
  );
};

export default PlantDetailsScreen;