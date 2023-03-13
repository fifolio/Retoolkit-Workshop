# Three Core Concepts Contd

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
