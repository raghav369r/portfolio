import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { About } from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/NavBar/Navbar";
import { Projects } from "./components/Projects/Projects";

export const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ToastContainer/>
    </div>
  );
};

// https://greatstack.in/
