import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Play } from "phosphor-react";
export default function Navbar() {
  return (
    <>
      <div className="flex  justify-between px-4 py-2 bg-slate-200">
        <div className="flex  gap-4">
          <Link to="/">Graph</Link>
          <Link to="table">Table</Link>
        </div>
        <Play className="self-end " size={24} weight="thin" />
      </div>
    </>
  );
}
