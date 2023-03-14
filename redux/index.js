/**
 * @summary: 1) we define a string constant that indicates the type of the action
 * @this {CAKE_ORDERED} is the Type of the action {object}
 */
const CAKE_ORDERED = "CAKE_ORDERED";

/**
 * @summary: 2) define our Action. Remember: an action is an {object} that has a Type property
 * @this {orderCake} is a function that will return the Action, and the Action itself will contain an the object that contain its type (type of action)
 */

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

/**
 * @summary: 3) define the Initial State of the store
 * @this {initialState} is an Object that store inside the {numOfCake} which save the initial value in the store
 */
const initialState = {
  numOfCakes: 10,
  anotherProperty: 0,
};

/**
 * @summary: 3) define the Reducer that gets 2 params to deal with, the {previousState} and the {action} that contain the object that have the values to update
 * @param {state} -> is to receive the initial State value
 * @param {action} -> is to receive the Action {object} with all the updated values
 */

const reducer = (state = initialState, action = orderCake) => {
  // Check for Action Type Property
  switch (action.type) {
    // In case the type is: CAKE_ORDERED
    case CAKE_ORDERED:
      // Return the following Object
      return {
        // Get a copy of the {state} object using spread operator
        ...state,
        // key {numOfCakes} : value {state.numOfCakes} minus 1
        numOfCakes: state.numOfCakes - 1,
      };
    // In case the type isn't: CAKE_ORDERED
    default:
      // Return the same previous state
      return state;
  }
};
