import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-s ">
          <Outlet />
        </div>
      </div>
      <div className="pt-8">
        <Footer />
      </div>
    </>
  );
}
