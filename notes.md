# WHAT IS REDUX ?

"Redux is a predictable state container for Javascript apps"

1. it's for Javascript apps

   - Redux is not tied to React
   - Can be used with React, Angular, Vue or even vanilla JS
   - Redux is library for Javascript applications

2. it's a state container

   - Redux store the state of you Application
   - State of an app is the state shared by all the individual components of that app

3. it's predictable
   #- Predictable in what way?
   Redux is a state container, and in any Javascript application, The state of the application can change, for example:

- In Todo list app, a to-do item can go from being in a state of (pending) to state of (completed).

In redux, a pattern is enforced to ensure all state transitions are explicit and can be tracked, in other words, with redux, the changes to your application's state become predictable.

# WHAT IS REDUX TOOLKIT ?

Redux toolkit is the official, opinionated, batteries-included toolset for efficient Redux development;

It is also intended to be the standard way to write Redux logic in your application.

# WHY REDUX TOOLKIT ?

Redux is great, but it does have few shortcomings 1. Configuring redux in an app seems complicated 2. In addition to redux, a lot of other packages have to be installed to get redux to do something useful 3. Redux requires too much boilerplate code, that is repeating the same pattern of code every time you have to add a functionality.

So, Redux Toolkit serves as an abstraction over redux, it hides the difficult parts ensuring you have a good developer experience.
