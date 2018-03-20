import React from "react";
import { Text, Button } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #fff;
`;

const PlantDetailsScreen = ({ plant, onDelete }) => {
  const { name } = plant;
  return (
    <Wrapper>
      <Text>Details Screen</Text>
      <Text>{name}</Text>
      <Button
        title="Delete"
        onPress={() => {
          onDelete(plant.id);
        }}
      />
    </Wrapper>
  );
};

PlantDetailsScreen.propTypes = {
  plant: PropTypes.object,
  onDelete: PropTypes.func
};

export default PlantDetailsScreen;
