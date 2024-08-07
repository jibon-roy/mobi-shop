import { createSlice } from "@reduxjs/toolkit";
import { loginUserWithEmail, registerUsers } from "./authActions";

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUsers.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUserWithEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserWithEmail.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.userToken = payload.userToken;
      })
      .addCase(loginUserWithEmail.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
