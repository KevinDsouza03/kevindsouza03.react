"use client"
import Aboutme from "./Aboutme/Aboutme.jsx";
import "./App.css";
import Navbar from "./Navbar/Navbar.jsx";
import Projects from "./Projects/Projects.jsx";
import Skills from "./Skills/Skills.jsx";
import Experience from "./Experience/Experience.jsx";
import ProjectSlider from "./Projects/ProjectSlider.jsx"
export default function Home() {
  return (
    <div className="group bg-[#343434] p-5 w-full h-full overflow-hidden ">
      <Navbar />
      <div className="grid place-items-center bg-[#1A2421] bg-opacity-30 p-20 lg:space-y-40  space-y-52 w-full h-full gap-40">
        <Aboutme />
        {/* Padding is added to every div in index.css. Adjust as necessary */}
        <Experience />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}
