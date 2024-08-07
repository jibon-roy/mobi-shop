import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { setUser, logout } from "./authSlice";

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === "auth/initializeAuth") {
    // Set up Firebase auth state listener
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user.getIdToken();
        store.dispatch(setUser({ userInfo: user, userToken: idToken }));
      } else {
        store.dispatch(logout());
      }
    });

    // Clean up the listener when the store is disposed
    return () => unsubscribe();
  }

  return next(action);
};

export default authMiddleware;
