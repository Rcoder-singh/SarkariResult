import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="mx-[24%]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
