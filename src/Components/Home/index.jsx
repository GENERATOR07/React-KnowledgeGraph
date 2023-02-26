import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import SideForms from "../SideForms";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="">
        <Outlet />
        {/* <SideForms className="col-span-1 bg-slate-200 h-screen" /> */}
      </div>
    </div>
  );
}
