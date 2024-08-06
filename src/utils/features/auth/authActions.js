import { createAsyncThunk } from "@reduxjs/toolkit";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

export const RegisterUsers = createAsyncThunk(
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
