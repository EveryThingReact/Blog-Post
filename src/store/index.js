import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/countReducers"; // Ensure correct import

const store = configureStore({
  reducer: {
    count: countReducer, // Must match the slice name
  },
});

export default store;
