import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
// import { logout as logoutAction } from "../../features/auth/authSlice";

export default function useGetUser() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const { userInfo, userToken, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      setUser(userInfo);
    }
    if (userToken) {
      setToken(userToken);
    }
    const getUserToken = localStorage.getItem("userToken");
    if (userToken !== getUserToken || !getUserToken) {
      dispatch(logout());
    }
  }, [dispatch, userInfo, userToken]);

  return { user, loading, token };
}
