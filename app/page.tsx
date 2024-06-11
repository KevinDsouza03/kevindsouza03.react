
import Aboutme from './Aboutme/Aboutme.jsx'
import './App.css'
import Navbar  from './Navbar/Navbar.jsx'
import Projects from './Projects/Projects.jsx'
import Skills from './Skills/Skills.jsx'
import Experience from './Experience/Experience.jsx'
export default function Home() {
  return (
    <div className="grid place-items-center bg-[#343434]">
      <Navbar />
      <Aboutme />
      {/* Padding is added to every div in index.css. Adjust as neccesary */}
      <Experience />
      <Projects />
      <Skills />
    </div>
  )
}

