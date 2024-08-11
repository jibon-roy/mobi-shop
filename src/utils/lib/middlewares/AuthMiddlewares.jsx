import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { setUser } from "../../features/auth/authSlice";
import { logOutUser } from "../../features/auth/authActions";

const AuthMiddleware = (store) => (next) => (action) => {
  if (action.type === "auth/initializeAuth") {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const idToken = await user.getIdToken();

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
        // No user found, log out
        store.dispatch(logOutUser());
      }
    });

    return () => unsubscribe();
  }

  return next(action);
};

export default AuthMiddleware;
