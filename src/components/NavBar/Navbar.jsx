import { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from "../../assets/logo.svg";


export const Navbar = () => {
  const [page ,setPage]=useState("home");
  // console.log(page);
  return (
    <div className="flex justify-between items-center my-5 mx-32">
      <img className="" src={logo} />
      <ul className="flex gap-5 font-customFont">
        <li onClick={()=>setPage("home")}><AnchorLink  href="#Home">Home</AnchorLink></li>
        <li onClick={()=>setPage("about")}><AnchorLink  href="#about">About Us</AnchorLink></li>
        <li onClick={()=>setPage("servoces")}><AnchorLink  href="#projects">Services</AnchorLink></li>
        <li onClick={()=>setPage("projects")}><AnchorLink  href="#projects">Portfolio</AnchorLink></li>
        <li onClick={()=>setPage("contact")}><AnchorLink  href="#contact">Contact</AnchorLink></li>
      </ul>
      <AnchorLink href="#contact" className="hidden md:block py-3 px-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer rounded-3xl transition delay-150 hover:scale-105">
        Connect With Me
      </AnchorLink>
    </div>
  );
};
