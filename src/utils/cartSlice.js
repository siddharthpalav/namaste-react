import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla(older) REDUX =>
      //  DON'T MUTATE STATE

      // Redux Toolkit uses IMMER BTS(Behind The Scenes)

      // mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    // originalState = {items:['pizza']}
    clearItem: (state, action) => {
      // RTK(Redux Toolkit) - either Mutate the existing state or return a new State

      console.log(state); // It will show you an object but you won't be able to expand and see it
      console.log(current(state)); // Here we can see the state
      state.items.length = 0; // []

      // we can also return empty object like following
      // return {items: []}; // this new object will be replaced inside originalState = []
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
