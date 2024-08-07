import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserWithEmail,
  loginUserWithGoogle,
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
      state.userInfo = {
        uid: userInfo.uid,
        email: userInfo.email,
        displayName: userInfo.displayName,
      };
      state.userToken = userToken;
      state.loading = false;
    },
    logout: (state) => {
      state.userInfo = null;
      state.userToken = null;
      state.loading = false;
    },
    initializeAuth: () => {}, // Action to initialize auth
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
        state.userInfo = action.payload.userInfo; // Assuming payload contains user info
        state.userToken = action.payload.userToken; // Assuming payload contains token
        console.log("Registration successful:", action.payload);
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
      });
  },
});

export const { setUser, logout, initializeAuth } = authSlice.actions;
export default authSlice.reducer;
