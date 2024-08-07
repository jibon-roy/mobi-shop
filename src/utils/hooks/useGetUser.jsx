import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useGetUser() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const { userInfo, userToken, loading } = useSelector((state) => state.auth);
  useEffect(() => {
    if (userInfo) {
      setUser(userInfo);
      // console.log("User Info:", userInfo);
    }
    if (userToken) {
      setToken(userToken);
      // console.log("User Token:", userToken);
    }
  }, [userInfo, userToken]);
  return { user, loading, token };
}
