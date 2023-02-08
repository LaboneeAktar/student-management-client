import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Sidebar from "../Pages/Shared/Sidebar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <section className="flex">
        <Sidebar></Sidebar>

        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default Main;
