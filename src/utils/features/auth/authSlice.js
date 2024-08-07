import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserWithEmail,
  loginUserWithGoogle,
  logOutUser,
  registerUser,
} from "./authActions";

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { userInfo, userToken } = action.payload;
      state.userInfo = userInfo;
      state.userToken = userToken;
      state.loading = false;
    },
    logout: (state) => {
      state.userInfo = null;
      state.userToken = null;
      state.loading = false;
    },
    initializeAuth: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userInfo = action.payload.userInfo;
        state.userToken = action.payload.userToken;
      })
      .addCase(registerUser.rejected, (state, action) => {
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
        state.userToken = action.payload.userToken;
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
        state.userInfo = action.payload.userInfo;
        state.userToken = action.payload.userToken;
        console.log("Google login successful:", action.payload);
      })
      .addCase(loginUserWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("Google login error:", action.payload);
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.userInfo = null;
        state.userToken = null;
        state.loading = false;
      });
  },
});

export const { setUser, logout, initializeAuth } = authSlice.actions;
export default authSlice.reducer;
