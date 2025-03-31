import { createSlice } from "@reduxjs/toolkit";

const countInitialState = { number: 0 };

const countSlice = createSlice({
  name: "count",
  initialState: countInitialState,  
  reducers: {
    countChange(state, action) {
      state.number = action.payload;
    },
  },
});

export const countActions = countSlice.actions;
export default countSlice.reducer;  // <-- Only export the reducer by default
