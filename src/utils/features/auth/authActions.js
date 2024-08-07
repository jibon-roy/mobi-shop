import { createAsyncThunk } from "@reduxjs/toolkit";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../lib/firebase";

export const registerUsers = createAsyncThunk(
  "auth/register",
  async (
    { firstName, lastName, dateOfBirth, gender, email, password },
    { rejectWithValue }
  ) => {
    const axiosPublic = useAxiosPublic();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axiosPublic.post(
        "/register",
        { firstName, lastName, dateOfBirth, gender, email, uid: user.uid },
        config
      );

      return { message: "Registration successful" };
    } catch (error) {
      if (error.code) {
        return rejectWithValue(error.message);
      } else if (error.response && error.response.data.message) {
        // Backend error handling
        return rejectWithValue(error.response.data.message);
      } else {
        // Generic error handling
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUserWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (_, { rejectWithValue }) => {
    const axiosPublic = useAxiosPublic(); // Initialize axiosPublic
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Optional: Send additional user info to your backend
      await axiosPublic.post(
        "/login",
        { email: user.email, uid: user.uid },
        { headers: { "Content-Type": "application/json" } }
      );

      return { uid: user.uid, email: user.email };
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosPublic.post(
        `/api/v1/user/login`,
        { email, password },
        config
      );
      // Store user's token in local storage
      localStorage.setItem("userToken", data.userToken);
      return { data, uid: user.uid, email: user.email };
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
