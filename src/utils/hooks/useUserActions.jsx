import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../features/auth/authActions";

export default function useUserActions() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const { userInfo, userToken, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      setUser(userInfo);
    } else {
      setUser(null);
    }
    if (userToken) {
      setToken(userToken);
    } else {
      setToken(null);
    }
  }, [userInfo, userToken]);

  const logOut = () => {
    dispatch(logOutUser());
  };

  return { user, loading, token, logOut };
}
