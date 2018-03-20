import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { NavigationActions } from "react-navigation";
import routes from "../navigation/routes";

const Name = styled.Text`
  font-family: "Open Sans";
`;

const ButtonWrapper = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 60px;

  background-color: #d1edca;
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

const Icon = styled.Text`
  font-size: 40px;
`;

export const AddNewPlantButton = ({ navigation }) => (
  <Wrapper
    onPress={() =>
      navigation.dispatch(
        NavigationActions.navigate({
          routeName: routes.ADD_NEW
        })
      )
    }
  >
    <ButtonWrapper>
      <Icon>+</Icon>
    </ButtonWrapper>
    <Name>Add new</Name>
  </Wrapper>
);
