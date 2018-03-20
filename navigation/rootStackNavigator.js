import { StackNavigator } from "react-navigation";

import routes from "./routes";

import HomeScreenContainer from "../components/home/HomeScreenContainer";
import PlantDetailsScreenContainer from "../components/plant-details/PlantDetailsScreenContainer";
import AddNewScreenContainer from "../components/add-new-plant/AddNewScreenContainer";

import CardStackStyleInterpolator from "react-navigation/src/views/CardStack/CardStackStyleInterpolator";

export const RootStackNavigator = StackNavigator(
  {
    home: {
      screen: HomeScreenContainer
    },
    details: {
      screen: PlantDetailsScreenContainer
    },
    addNew: {
      screen: AddNewScreenContainer
    }
  },
  {
    initialRouteName: routes.HOME,
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal
    }),
    headerMode: "float",
    mode: "card",
    cardStyle: {
      backgroundColor: '#000',
      shadowColor: '#000',
      shadowRadius: 10,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 0
      }
    }
  }
);
