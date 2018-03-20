import v4 from "uuid/v4";

initialState = [];

// Actions
const ADD = "plants-app/plants/ADD";
const DELETE = "plants-app/plants/DELETE";

// Reducer
export default (reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD: {
      const newState = [...state, action.plant];
      return newState;
      break;
    }
    case DELETE: {
      const newState = state.filter(plant => plant.id !== action.id);
      return newState;
      break;
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
export const addPlant = plant => {
  const id = v4();
  return {
    type: ADD,
    plant: {
      id,
      ...plant
    }
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
