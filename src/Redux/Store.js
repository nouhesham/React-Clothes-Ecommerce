import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slices/CounterSlice";
const Store = configureStore({
  reducer: { counter: CounterSlice },
});

export default Store;
