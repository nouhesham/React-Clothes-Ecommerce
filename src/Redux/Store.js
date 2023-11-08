import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slices/CounterSlice";
import Cartslice from "./Slices/CartSlice";
const Store = configureStore({
  reducer: { counter: CounterSlice, cart: Cartslice },
});

export default Store;
