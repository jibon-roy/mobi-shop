import { createAsyncThunk } from "@reduxjs/toolkit";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../lib/firebase";
import { logout } from "./authSlice";
export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    { name, dateOfBirth, gender, email, password },
    { rejectWithValue }
  ) => {
    const axiosPublic = useAxiosPublic();

    try {
      // Register the user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Send user details to backend
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosPublic.post(
        "/api/v1/user/register",
        {
          name,
          dateOfBirth,
          gender,
          email,
          uid: user.uid,
          password,
        },
        config
      );

      const tokenFromBackend = data.userToken;
      localStorage.setItem("userToken", tokenFromBackend);

      // Retrieve token from localStorage for comparison
      const tokenFromLocalStorage = localStorage.getItem("userToken");

      // Verify tokens match
      if (tokenFromBackend !== tokenFromLocalStorage) {
        throw new Error("Token mismatch error.");
      }

      return { ...data, userToken: tokenFromLocalStorage };
    } catch (error) {
      if (error.code) {
        return rejectWithValue(error.message);
      } else if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const loginUserWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (_, { rejectWithValue }) => {
    const provider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Optional: Send additional user info to your backend
      const { data } = await axiosPublic.post(
        "/api/v1/user/google-login",
        {
          email: user.email,
          uid: user.uid,
          name: user.displayName,
          dateOfBirth: null,
          gender: null,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const tokenFromBackend = data.userToken;
      localStorage.setItem("userToken", tokenFromBackend);

      // Retrieve token from localStorage for comparison
      const tokenFromLocalStorage = localStorage.getItem("userToken");

      // Verify tokens match
      if (tokenFromBackend !== tokenFromLocalStorage) {
        throw new Error("Token mismatch error.");
      }

      return { ...data, userToken: tokenFromLocalStorage };
    } catch (error) {
      if (error.code) {
        return rejectWithValue(error.message);
      } else if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const loginUserWithEmail = createAsyncThunk(
  "auth/loginWithEmail",
  async ({ email, password }, { rejectWithValue }) => {
    const axiosPublic = useAxiosPublic();

    try {
      // Authenticate with Firebase
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Optionally, you can get a token from Firebase if needed
      const idToken = await user.getIdToken();

      // Optionally, send the Firebase token to your backend
      const { data } = await axiosPublic.post(
        `/api/v1/user/login`,
        { email, password, idToken }, // Send Firebase token to backend
        { headers: { "Content-Type": "application/json" } }
      );

      const tokenFromBackend = data.userToken;
      localStorage.setItem("userToken", tokenFromBackend);

      // Retrieve token from localStorage for comparison
      const tokenFromLocalStorage = localStorage.getItem("userToken");

      // Verify tokens match
      if (tokenFromBackend !== tokenFromLocalStorage) {
        throw new Error("Token mismatch error.");
      }

      return { ...data, userToken: tokenFromLocalStorage };
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const logOutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { dispatch }) => {
    try {
      await signOut(auth);
      dispatch(logout());
      localStorage.removeItem("userToken");
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  }
);
