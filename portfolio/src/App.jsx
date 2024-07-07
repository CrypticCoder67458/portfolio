import { Hero } from "./Components/Hero/Hero"
import { Navbar } from "./Components/Navbar/Navbar"
import './Styles/App.css'
import { Skills } from "./Components/Skills/Skills"
import { AboutMe } from "./Components/AboutMe/AboutMe"
import { Project } from "./Components/Projects/Project"

function App() {
  return(
    <div className="app">
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Project/>

    </div>
  )
}

export default App
