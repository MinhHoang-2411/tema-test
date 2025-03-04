// lib/redux/slices/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// define type
interface CounterState {
  value: number;
}

// initial state
const initialState: CounterState = {
  value: 0,
};

// create slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
