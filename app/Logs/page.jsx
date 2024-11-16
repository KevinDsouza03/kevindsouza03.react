"use client";

import Navbar from "../Navbar/Navbar.jsx";
import LogList from "./LogList.jsx";

export default function Logs() {
  return (
    <div className="bg-[#343434] p-5">
      <div className="bg-[#1A2421] bg-opacity-30 p-20 flex h-screen">
        <Navbar />
        <div class="container ">
          <LogList/>
        </div>
      </div>
    </div>
  );
}