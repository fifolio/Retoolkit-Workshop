/**
 * @summary: 1) we define a string constant that indicates the type of the action
 * @this {CAKE_ORDERED} is the Type of the action {object}
 */
const CAKE_ORDERED = "CAKE_ORDERED";

/**
 * @summary: 2) define our action. Remember: an action is an {object} that has a Type property
 * @this {orderCake} is a function that will return the Action, and the Action itself will contain an the object that contain its type (type of action)
 */

function orderCake(name, home) {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}
