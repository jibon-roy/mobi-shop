import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";

export default function MainLayout() {
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
