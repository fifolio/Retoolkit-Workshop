// Import the Redux
const redux = require("redux");
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

// Import and Create Middleware
const applyMiddleware = redux.applyMiddleware;

// Import Redux Logger
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// Configure Redux Store and pass it to {CreateStore}
const createStore = redux.legacy_createStore;

/**
 * @summary: 1) we define a string constant that indicates the type of the action
 * @this {CAKE_ORDERED} is the Type of the action {object}
 * @this {CAKE_RESTOCKED} is the Type of the action {object}
 */
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

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

function orderIceCream(qnt = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qnt,
  };
}

function restockIceCream(qnt = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qnt,
  };
}

/**
 * @summary: 3) define the Initial State of the store
 * @this {initialState} is an Object that store within it the {numOfCake} which save the initial value in the state
 */
const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
};

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};
/**
 * @summary: 4) define the Reducer that gets 2 params to deal with, the {previousState} and the {action} that contain the object that have the values to update
 * @param {state} -> is to receive the initial State value
 * @param {action} -> is to receive the Action {object} with all the updated values
 */

const cakeReducer = (state = initialCakeState, action) => {
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
    // In case the type isn't not found
    default:
      // Return the same previous state
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  // Check for Action Type Property
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    // In case the type isn't not found
    default:
      // Return the same previous state
      return state;
  }
};

// Create {rootReducer} to combine Reducers
const rootReducer = combineReducers({
  Cake: cakeReducer,
  IceCream: iceCreamReducer,
});

// Create Redux store
const store = createStore(rootReducer, applyMiddleware(logger));

// Get the current state of the store
console.log(`initial state`, store.getState());

// subscribe the app to the changes in the state
const unsubscribe = store.subscribe(function(){});

// Dispatching the Action
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

/**
 * @summary: Combined couple of actions to dispatch to the store.
 * @this {bindActionCreators} is a function that takes 2 params, the 1st param is an object that contains all the Actions we want to dispatch. the 2nd param is like "where to dispatch the action to"
 */

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

// dispatching
actions.orderCake();
actions.orderIceCream();

actions.restockCake();
actions.restockIceCream();

// Unsubscribe to the changes of the store (STOP LISTEN)
unsubscribe();
