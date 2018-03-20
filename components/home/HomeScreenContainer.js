import React, { Component } from "react";
import { connect } from "react-redux";

import HomeScreen from "./HomeScreen";
class HomeScreenContainer extends Component<Props> {
  static navigationOptions = {
    title: "Your plants",
    gesturesEnabled: true,
    // headerStyle: {
    //   backgroundColor: "white",
    //   borderBottomWidth: 0,
    //   paddingTop: 30,
    //   paddingBottom: 10
    // },
    // headerTitleStyle: {
    //   fontFamily: "Open Sans",
    //   fontSize: 15,
    //   fontWeight: "bold"
    // },
  };

  render() {
    const { navigation, plants } = this.props;
    return <HomeScreen navigation={navigation} plants={plants} />;
  }
}

const mapStateToProps = state => ({
  plants: state.plants
});

export default connect(mapStateToProps)(HomeScreenContainer);
