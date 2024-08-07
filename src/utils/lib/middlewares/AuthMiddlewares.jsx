import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { setUser, logout } from "../../features/auth/authSlice";
const AuthMiddleware = (store) => (next) => (action) => {
  if (action.type === "auth/initializeAuth") {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const idToken = await user.getIdToken();
          const getUserToken = localStorage.getItem("userToken");
          if (idToken != getUserToken || !getUserToken) {
            localStorage.removeItem("userToken"); // Ensure token is removed
            store.dispatch(logout());
          } else {
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
          }
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
