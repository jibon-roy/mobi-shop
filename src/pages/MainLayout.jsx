import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import { useRef } from "react";
import SmoothScrollbar from "smooth-scrollbar";
// import { Scrollbar } from "smooth-scrollbar/scrollbar";

export default function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollbar = SmoothScrollbar.init(scrollContainerRef.current, {
        damping: 0.07,
      });

      return () => scrollbar.destroy();
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <main
      ref={scrollContainerRef}
      className="flex min-h-screen flex-col justify-between"
      style={{ height: "100vh", overflow: "hidden" }}
    >
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
