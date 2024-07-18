"use client";

import Navbar from "../Navbar/Navbar.jsx";
import { Document, Page, pdfjs } from "react-pdf";

export default function CV() {
  return (
    <div className="bg-[#343434] p-5">
      <div className="bg-[#1A2421] bg-opacity-30 p-20 flex h-screen">
        <Navbar />
        <div class="container ">
          <iframe class="w-full h-full"src='Kevin_Dsouza_Resume.pdf' />
        </div>
      </div>
    </div>
  );
}
