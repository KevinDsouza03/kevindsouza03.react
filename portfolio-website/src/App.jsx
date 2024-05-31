import Aboutme from './Aboutme/Aboutme.jsx'
import './App.css'
import Navbar  from './Navbar/Navbar.jsx'
import Projects from './Projects/Projects.jsx'
import Skills from './Skills/Skills.jsx'
import Experience from './Experience/Experience.jsx'
function App() {
  return (
    <div className="grid place-items-center bg-[#343434]">
      <Navbar />
      <Aboutme />
      <Experience />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
