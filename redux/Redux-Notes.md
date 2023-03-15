# Three Core Concepts of Redux

---

1. a STORE that holds the state of your application.
2. an ACTION that describes what happened in the application.
3. a REDUCER which handles tha ACTION and decides how to update the STATE in the STORE

# Three Principles

---

1. "The Global state of your application is stored as an object inside a single store"

   - Maintain out application state in a single object which would be managed by the Redux store.

2. "The only way to change the state is to DISPATCH an ACTION, an object that describes what happened"

   - to update the state of your application, you need to let Redux know about that with an Action.
   - Not allowed to directly update the state object.

3. "To specify how the state tree is updated based on actions, you write pure reducers"
   - pure reducers are a pure functions that takes previous state and an Action as an input, and return the new State.
     Reducer (prevState, Action) => {
     return newState
     }

# Actions

---

- The only way your application can interact with the store
- Carry some information from your app to the redux store
- Plain Javascript object
- Have a 'type' property that describe something that happened in the application
- the 'type' property is typically defined as string constants

# Reducers

---

- Specify how the app's state changes in response to actions sent to the store
- Function that accepts (state) and (action) as arguments, and returns the next state of the application
- (previousState, Action) => NewState

# Redux Store

---

"One Store for the entire application"
Responsibilities:

> Holds application state
> Allows access to state via **getState()**
> Allows state to be updated via **dispatch(action)**
> Register listeners via **subscribe(listener)**

- The store allows our application to register listeners through the {Subscribe method}.
- The Subscribe method, accepts a {Function} as its Argument, which is executed anytime the state in the Redux store changes
  > Handles unregistering of listeners via the function returned by **subscribe(listener)**

# Middleware

---

"is the suggested wat to extend Redux with custom functionality"

- Provides a third-party extension point between Dispatching an action, and the moment it reaches the Reducer
- Use middleware for:
  > Logging,
  > Crash reporting,
  > preforming asynchronous tasks, etc
