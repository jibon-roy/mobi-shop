import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import AuthMiddleware from "../lib/middlewares/AuthMiddlewares";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthMiddleware),
});

export default store;
