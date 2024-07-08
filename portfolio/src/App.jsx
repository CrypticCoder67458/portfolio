import { Hero } from "./Components/Hero/Hero"
import { Navbar } from "./Components/Navbar/Navbar"
import './Styles/App.css'
import { Skills } from "./Components/Skills/Skills"
import { AboutMe } from "./Components/AboutMe/AboutMe"
import { Projects } from "./Components/Projects/Projects"
import { Contact } from "./Components/Contact/Contact"
import { Footer } from "./Components/Footer/Footer"
function App() {
  return(
    <div className="app">
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>


    </div>
  )
}

export default App
