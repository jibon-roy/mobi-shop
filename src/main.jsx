import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./utils/lib/router";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import { initializeAuth } from "./utils/features/auth/authSlice";

store.dispatch(initializeAuth());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
