// Import the Redux
const redux = require("redux");

// Configure Redux Store and pass it to {CreateStore}
const createStore = redux.legacy_createStore;

/**
 * @summary: 1) we define a string constant that indicates the type of the action
 * @this {CAKE_ORDERED} is the Type of the action {object}
 * @this {CAKE_RESTOCKED} is the Type of the action {object}
 */
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
/**
 * @summary: 2) define our Action. Remember: an action is an {object} that has a Type property
 * @this {orderCake} is a function that will return the Action, and the Action itself will contain an the object that contain its type (type of action)
 */

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qnt = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qnt,
  };
}

/**
 * @summary: 3) define the Initial State of the store
 * @this {initialState} is an Object that store within it the {numOfCake} which save the initial value in the state
 */
const initialState = {
  numOfCakes: 10,
};

/**
 * @summary: 4) define the Reducer that gets 2 params to deal with, the {previousState} and the {action} that contain the object that have the values to update
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
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    // In case the type isn't: CAKE_ORDERED
    default:
      // Return the same previous state
      return state;
  }
};

// Create Redux store
const store = createStore(reducer);

// Get the current state of the store
console.log(`initial state`, store.getState());

// subscribe the app to the changes in the state
const unsubscribe = store.subscribe(() => {
  console.log(`updated state:`, store.getState());
});

// Dispatching the Action
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

store.dispatch(restockCake(3));

// Unsubscribe to the changes of the store (STOP LISTEN)
unsubscribe();
