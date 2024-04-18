import { About } from "./components/About/About"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/NavBar/Navbar"

export const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}
