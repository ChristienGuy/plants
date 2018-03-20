import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { View, ScrollView } from "react-native";

import Layout from "../shared/Layout";
import { PlantPreview } from "../PlantPreview";
import { AddNewPlantButton } from "../AddNewPlantButton";

const Grid = styled.View`
  display: flex;

  padding-top: 40px;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  align-items: flex-start;
`;

const StyledPreview = styled(PlantPreview)`
  margin-bottom: 50px;
  width: 50%;
`

const HomeScreen = ({ navigation, plants }) => {
  return (
    <Layout>
      <ScrollView>
      <Grid>
        {plants.map((plant, index) => (
          <StyledPreview key={index} plant={plant} navigation={navigation} />
        ))}
        <AddNewPlantButton navigation={navigation} />
      </Grid>
      </ScrollView>
    </Layout>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object,
  plants: PropTypes.array
};

export default HomeScreen;
