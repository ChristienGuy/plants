// @flow
import v4 from "uuid/v4";
import PushNotification from "react-native-push-notification";

type Plant = {
  name: string,
  lastWatered: Date,
  daysBetweenWater: number
};

// Actions
const ADD = "plants-app/plants/ADD";
const DELETE = "plants-app/plants/DELETE";

// Reducer
initialState = [];
export default (reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD: {
      const newState = [...state, action.plant];
      return newState;
    }
    case DELETE: {
      const newState = state.filter(plant => plant.id !== action.id);
      return newState;
    }
    default:
      return state;
      break;
  }
});

// Action Creators

/**
 * Adds a plant to the data store and gives it a uuid
 * @param {object} plant - An object containing all info about a single plant
 */
export const addPlant = (plant: Plant) => {
  const id = v4();
  const newPlant = {
    id,
    ...plant
  };

  // Multiple side-effects in action creator is hard to test.
  // Look into thunk/saga
  PushNotification.localNotificationSchedule({
    message: `${plant.name} needs watering!`,
    date: new Date(Date.now() + 10 * 1000), // TODO: get date from AddPlantForm
    userInfo: {
      plant: {
        ...newPlant
      }
    }
  });

  return {
    type: ADD,
    plant: newPlant
  };
};

/**
 * Removes a single plant from the data store
 * @param {string} id - uuid of the plant to delete
 */
export const deletePlant = id => {
  return {
    type: DELETE,
    id
  };
};
