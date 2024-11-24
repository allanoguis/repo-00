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
