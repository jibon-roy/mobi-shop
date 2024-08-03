import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";

export default function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  console.log("MainLayout content will render");
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
