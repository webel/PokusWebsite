import { createSlice } from "@reduxjs/toolkit";

export const pokus = createSlice({
  name: "pokus",
  initialState: {
    interval: 5,
    // Wether we are focusing atm,
    focus: true,
    // Wether we are resting atm.
    rest: false,
    // Note: both focus and rest are necessary
    // as neither need be true when the Pokus is off!

    // Alternative implementation thoughts...
    // numLights: 8,
    // lightDelay: 5 * 60 / 8
  },
  reducers: {
    toggle: (state) => {
      // Toggle the Pokus on or off.
      state.focus = !(state.focus || state.rest);
      state.rest = false;
    },
    // Update the focusing time
    update: (state, action) => {
      state.interval = action.payload;
    },
    // Meaning that a time-segment times out,
    // and in effect switches from focus to rest or vice versa.
    timeout: (state) => {
      state.focus = !state.focus;
      state.rest = !state.rest;
    },
  },
});

export const { toggle, update, timeout } = pokus.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectInterval = (state) => state.pokus.interval;
export const selectFocus = (state) => state.pokus.focus;
export const selectRest = (state) => state.pokus.rest;
export const selectOn = (state) => state.pokus.focus || state.pokus.rest;

export default pokus.reducer;
