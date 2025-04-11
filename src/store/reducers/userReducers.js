import { createSlice } from "@reduxjs/toolkit";

const userInitialState = { userInfo: null};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,  
  reducers: {
   setUserInfo(state, action){
    state.userInfo = action.payload;
   }
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;  // <-- Only export the reducer by default
