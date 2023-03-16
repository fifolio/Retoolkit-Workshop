// import the App store
const store = require("./app/store");

// Import cake Actions
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
// Import Ice Cream Actions
const iceCreamSliceActions =
  require("./features/icecream/iceCreamSlice").iceCreamSliceActions;
// import userSlice Action
const fetchUsers = require("./features/useSlice").fetchUsers;

console.log("Initial state:", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Update state", store.getState());
});

// Dispatching Actions
store.dispatch(fetchUsers());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(4));
// // store.dispatch(iceCreamSliceActions.ordered());
// // store.dispatch(iceCreamSliceActions.ordered());
// store.dispatch(iceCreamSliceActions.restocked(4));

// unsubscribe();
