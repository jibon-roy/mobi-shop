import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const { userInfo, userToken, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (userInfo) {
      console.log("User Info:", userInfo);
    }
    if (userToken) {
      console.log("User Token:", userToken);
    }
  }, [userInfo, userToken]);

  if (loading) return <Loading />;
  // if (error) return <div>Error: {error}</div>;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div>
        <Navbar />
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
