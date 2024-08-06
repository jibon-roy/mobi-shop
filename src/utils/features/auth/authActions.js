import { createAsyncThunk } from "@reduxjs/toolkit";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export const RegisterUsers = () => {
  const axiosPublic = useAxiosPublic();

  return createAsyncThunk(
    "auth/register",
    async (
      { firstName, lastName, dateOfBirth, gender, email, password },
      { rejectWithValue }
    ) => {
      {
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          await axiosPublic.post(
            { firstName, lastName, dateOfBirth, gender, email, password },
            config
          );
        } catch (error) {
          // return custom error message from backend if present
          if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
          } else {
            return rejectWithValue(error.message);
          }
        }
      }
    }
  );
};
