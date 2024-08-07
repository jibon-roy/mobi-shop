import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { setUser, logout } from "../../features/auth/authSlice";

const AuthMiddleware = (store) => (next) => (action) => {
  if (action.type === "auth/initializeAuth") {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Get the Firebase ID token
          const idToken = await user.getIdToken();

          // Dispatch user data and token to Redux store
          store.dispatch(
            setUser({
              userInfo: {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                lastSignIn: user.metadata.lastSignInTime,
              },
              userToken: idToken,
            })
          );
        } catch (error) {
          console.error("Error fetching ID token:", error);
        }
      } else {
        store.dispatch(logout());
      }
    });

    return () => unsubscribe();
  }

  return next(action);
};

export default AuthMiddleware;
