import { createSlice } from "@reduxjs/toolkit";
//initial state for the counter
const initialState = {
  counter: 0,
};

const CounterSlice = createSlice({
  //name
  name: "counter",
  initialState,
  //represent the actions
  reducers: {
    //actions keys and values
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});
console.log(CounterSlice);

//those are the actionsss itself different than the reducers themselves

export const { increment, decrement } = CounterSlice.actions;

//this is the whole object that has name,reducers, actions

//store must had reducers and we need its actions to call it inside the components
export default CounterSlice.reducer;
