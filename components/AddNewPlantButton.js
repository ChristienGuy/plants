import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const Name = styled.Text`
  font-family: "Open Sans";
`;

const ButtonWrapper = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  border-width: 1px;
  border-color: #004905;
  margin-bottom: 10px;
  border-style: dashed;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const AddNewPlantButton = ({ navigation }) => (
  <Wrapper>
    <ButtonWrapper >
      <Name>+</Name>
    </ButtonWrapper >
    <Name>Add new</Name>
  </Wrapper>
);
