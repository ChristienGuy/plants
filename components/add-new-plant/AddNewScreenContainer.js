import React, { Component } from "react";
import { connect } from "react-redux";
import routes from "../../navigation/routes";
import { NavigationActions } from "react-navigation";
import AddNewScreen from "./AddNewScreen";

import { addPlant } from "../../store/plants";

class AddNewScreenContainer extends Component {
  static navigationOptions = {
    title: "Add a new plant",
    gesturesEnabled: true,
  }

  addNewPlant = plant => {
    this.props.dispatch(addPlant(plant));
    this.props.dispatch(NavigationActions.back());
  };

  render() {
    const { plants } = this.props;
    return <AddNewScreen plants={plants} addPlant={this.addNewPlant} />;
  }
}

const mapStateToProps = state => ({
  plants: state.plants
});

export default connect(mapStateToProps)(AddNewScreenContainer);
