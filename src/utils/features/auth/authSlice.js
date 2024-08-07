import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserWithEmail,
  loginUserWithGoogle,
  registerUsers,
} from "./authActions";

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
      .addCase(registerUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        console.log("Registration successful:", action.payload);
      })
      .addCase(registerUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("Registration error:", action.payload);
      })
      .addCase(loginUserWithEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserWithEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.data;
        state.userToken = action.payload.data.userToken;
        console.log("Login successful:", action.payload);
      })
      .addCase(loginUserWithEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("Login error:", action.payload);
      })
      .addCase(loginUserWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.userToken = action.payload.userToken;
        console.log("Google login successful:", action.payload);
      })
      .addCase(loginUserWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("Google login error:", action.payload);
      });
  },
});

export default authSlice.reducer;
