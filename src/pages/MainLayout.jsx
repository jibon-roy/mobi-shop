import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

export default function MainLayout() {
  const phoneData = async () => await fetch("./phones.json");
  // const data = phoneData.json();
  // console.log(data);

  if (!phoneData) return <Loading />;
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
