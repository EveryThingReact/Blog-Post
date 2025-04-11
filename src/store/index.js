import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers"; // Ensure correct import

const userInfoFromStorage = localStorage.getItem('account') ? 
JSON.parse(localStorage.getItem('account')) : null; 

const initialState = {
  user: {userInfo: userInfoFromStorage},
}
const store = configureStore({
  reducer: {
    user: userReducer, // Must match the slice name
  },
  preloadedState: initialState
});

export default store;
