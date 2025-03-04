// lib/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

// take types RootState and AppDispatch from store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
