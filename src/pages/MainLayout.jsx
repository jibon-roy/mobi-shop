import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function MainLayout() {
  return (
    <main>
      <Navbar />
      <Outlet />
      
    </main>
  )
}
