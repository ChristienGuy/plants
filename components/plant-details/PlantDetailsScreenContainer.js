import React, { Component } from "react";
import { View } from "react-native";
import { NavigationActions } from "react-navigation";
import styled from "styled-components";

import { deletePlant } from "../../store/plants";
import PlantDetailsScreen from "./PlantDetailsScreen";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Wrapper = styled.View`
  display: flex;
  flex: 1;
  background-color: #fff;
`;

class PlantDetailsScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.name : "Details",
      headerTitleStyle: {
        fontFamily: "Open Sans"
      },
      gesturesEnabled: true
    };
  };

  deletePlant = id => {
    const { deletePlant, navigation } = this.props;
    deletePlant(id);

    navigation.dispatch(NavigationActions.back());
  };

  render() {
    const { params } = this.props.navigation.state;
    const { name, id } = params;
    const plant = this.props.plants.find(plant => plant.id === id);

    if (!plant) {
      return <Wrapper />;
    }
    return (
      <PlantDetailsScreen
        plant={plant}
        name={name}
        onDelete={this.deletePlant}
      />
    );
  }
}

const mapStateToProps = state => ({
  plants: state.plants
});

export default connect(mapStateToProps, { deletePlant })(
  PlantDetailsScreenContainer
);
