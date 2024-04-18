import { About } from "./components/About/About"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/NavBar/Navbar"
import { Projects } from "./components/Projects/Projects"

export const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  )
}


// https://greatstack.in/