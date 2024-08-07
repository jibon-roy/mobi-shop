import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { setUser, logout } from "../../features/auth/authSlice";

const AuthMiddleware = (store) => (next) => (action) => {
  if (action.type === "auth/initializeAuth") {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user.getIdToken();
        store.dispatch(
          setUser({
            userInfo: {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
            },
            userToken: idToken,
          })
        );
      } else {
        store.dispatch(logout());
      }
    });

    // Clean up the listener when the store is disposed
    return () => unsubscribe();
  }

  return next(action);
};

export default AuthMiddleware;
