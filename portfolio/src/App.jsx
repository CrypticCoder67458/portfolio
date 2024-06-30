import { Hero } from "./Components/Hero/Hero"
import { Navbar } from "./Components/Navbar/Navbar"
import './Styles/App.css'
import { Skills } from "./Components/Skills/Skills"
import { AboutMe } from "./Components/AboutMe/AboutMe"

function App() {
  return(
    <div>
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Skills/>

    </div>
  )
}

export default App
