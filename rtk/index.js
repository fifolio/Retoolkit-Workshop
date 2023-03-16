// import the App store
const store = require("./app/store");

// Import cake Actions
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
// Import Ice Cream Actions
const iceCreamSliceActions =
  require("./features/icecream/iceCreamSlice").iceCreamSliceActions;

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
store.dispatch(iceCreamSliceActions.ordered());
store.dispatch(iceCreamSliceActions.ordered());
store.dispatch(iceCreamSliceActions.restocked(2));



unsubscribe();
