// @flow
import React from "react";
import { Text, Switch } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import { format, distanceInWords, differenceInCalendarDays } from "date-fns";

import Button from "../shared/Button";

const Wrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #fff;
`;

const PlantDetailsScreen = ({ plant, onDelete }) => {
  const { name, lastWatered, daysBetweenWater } = plant;

  const daysAgoWatered = differenceInCalendarDays(Date.now(), lastWatered);
  const waterPercentage = Math.round(
    (daysBetweenWater - daysAgoWatered) / daysBetweenWater * 100
  );

  return (
    <Wrapper>
      <Text>{name}</Text>
      <Text>
        Last watered:{" "}
        {distanceInWords(Date.now(), lastWatered, { addSuffix: true })} ({format(
          lastWatered,
          "MM-DD-YY"
        )})
      </Text>
      <Text>{daysBetweenWater}</Text>
      <Text>{waterPercentage}</Text>
      <Button
        title="Delete"
        variant="danger"
        onPress={() => {
          onDelete(plant.id);
        }}
      />
      <Switch />
    </Wrapper>
  );
};

PlantDetailsScreen.propTypes = {
  plant: PropTypes.object,
  onDelete: PropTypes.func
};

export default PlantDetailsScreen;
