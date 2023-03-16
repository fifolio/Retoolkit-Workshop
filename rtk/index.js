// import the App store
const store = require("./app/store");

// Import cake Actions
const cakeActions = require("./features/cake/cakeSlice").cakeActions;

console.log("Initial state:", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

// Dispatching Actions
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(4));

unsubscribe();
