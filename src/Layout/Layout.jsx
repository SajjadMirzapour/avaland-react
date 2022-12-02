import "./layout.scoped.scss";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import SidebarMobile from "./Sidebar/SidebarMobile";

export default function Layout() {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="sidebar-mobile">
        <SidebarMobile />
      </div>
      <div className="main-container">
        <Header />
        <Outlet />
      </div>
      {/* <PlayingMusic /> */}
    </div>
  );
}