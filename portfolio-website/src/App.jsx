import Aboutme from './Aboutme/Aboutme.jsx'
import './App.css'
import Navbar  from './Navbar/Navbar.jsx'
import Projects from './Projects/Projects.jsx'
import Skills from './Skills/Skills.jsx'
function App() {
  return (
    <div className="grid place-items-center bg-[#343434]">
      <Navbar />
      <Aboutme />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
