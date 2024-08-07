// import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logOutUser } from "../features/auth/authActions";
// import { logout } from "../features/auth/authSlice";
// import jwtDecode from "jwt-decode"; // Import jwtDecode

export default function useGetUser() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const { userInfo, userToken, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      setUser(userInfo);
      // console.log("User Info:", userInfo);
    }
    if (userToken) {
      setToken(userToken);
    }
    // const siteToken = localStorage.getItem("userToken");

    // if (!siteToken) {
    //   dispatch(logOutUser());
    // }
    // Decoding the token to verify it
    // if (userToken) {
    // try {
    // const decodedToken = jwtDecode(userToken);
    // console.log("Decoded Token:", decodedToken);
    // } catch (error) {
    // console.error("Error decoding token:", error);
    // }
    // }
  }, [userInfo, userToken]);

  const logOut = () => {
    dispatch(logOutUser());
  };

  return { user, loading, token, logOut };
}
