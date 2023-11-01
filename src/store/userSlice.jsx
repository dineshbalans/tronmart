import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    user: {},
  },
  reducers: {
    loginUser(state) {
      state.isLogin = true;
    },
    logOutUser(state) {
      state.isLogin = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
