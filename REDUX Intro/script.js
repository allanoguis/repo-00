// Store
interface CounterState {
  value: Number;
}
interface UserState {
  isSignedIn: Boolean;
}

// Actions
const increment = { type: "INCREMENT" };
const incrementByAmount = { type: "INCREMENT", payload: 10 };

// Reducers
// Responsible for the type of the action and use payload to make updates to the Store

// *important* always make a copy of the state before making changes to the state. kinda like classes or constructors
