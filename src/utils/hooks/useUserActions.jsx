import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
// import { setUser } from "../../features/auth/authSlice";
import { logOutUser } from "../features/auth/authActions";
import { auth } from "../lib/firebase";
import { setUser } from "../features/auth/authSlice";

export default function useUserActions() {
  const [user, setUserState] = useState(null);
  const [token, setToken] = useState(null);
  const { userInfo, userToken, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const idToken = await user.getIdToken();

          // Update Redux store with user info and token
          dispatch(
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

          // Update local state
          setUserState({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            lastSignIn: user.metadata.lastSignInTime,
          });
          setToken(idToken);
        } catch (error) {
          console.error("Error fetching ID token:", error);
        }
      } else {
        // No user found, dispatch logout action
        dispatch(logOutUser());
        setUserState(null);
        setToken(null);
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [dispatch]);

  const logOut = () => {
    dispatch(logOutUser());
    setUserState(null);
    setToken(null);
  };

  return { user: user || userInfo, token: token || userToken, loading, logOut };
}
