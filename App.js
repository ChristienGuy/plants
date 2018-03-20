/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from "react";
import { BackHandler, PushNotificationIOS } from "react-native";
import { connect } from "react-redux";
import { createReduxBoundAddListener } from "react-navigation-redux-helpers";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import routes from "./navigation/routes";

import { RootStackNavigator } from "./navigation/rootStackNavigator";
import PushNotification from "react-native-push-notification";
export const addListener = createReduxBoundAddListener("root");

class AppNavigation extends Component<Props> {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);

    PushNotification.configure({
      onNotification: notification => {
        this.props.dispatch(
          NavigationActions.navigate({
            routeName: routes.DETAILS,
            params: {
              ...notification.userInfo.plant
            }
          })
        );
        console.log("====================================");
        console.log(notification);
        console.log("====================================");
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      }
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, navigation } = this.props;
    if (navigation.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, navigation } = this.props;
    const navigationProp = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.navigation,
      addListener
    });
    return <RootStackNavigator navigation={navigationProp} />;
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation
});

export default connect(mapStateToProps)(AppNavigation);
