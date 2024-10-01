import { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import logo from "../../assets/logo.svg";
import theme_pattern from "../../assets/theme_pattern.svg";

import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [page ,setPage]=useState("home");
  const [opened,setOpened]=useState(false);
  // console.log(page);
  return (
    <div className="flex justify-between items-center my-5 md:mx-32">
      {/* <img className="" src={logo}/> */}
      <div>
        <h1 className="text-4xl font-customFont font-bold relative">RaGhav</h1>
        <img src={theme_pattern} className="absolute -mt-8 w-28 ml-8 -z-10" />
      </div>
      <div className="relative md:hidden" onClick={()=>setOpened(!opened)}>
        {opened?<IoMdClose className="size-10 cursor-pointer"/>:<CiMenuFries className="size-10 cursor-pointer"/>}
      </div>
      <div className={"w-full mt-16 md:mt-0 bg-bg h-fit md:bg-transparent md:h-auto md:w-auto absolute top-0 right-0 md:relative md:block"+(opened?" block":" hidden")}>
        <ul className={"flex flex-col justify-end items-center md:flex-row gap-5 sm:flex-col font-customFont "}>
          {/* <li className="md:hidden transform hover:scale-110 cursor-pointer ml-auto"><IoMdClose className="size-10 cursor-pointer" onClick={()=>setOpened(!opened)}/></li> */}
          <li className="mt-5 md:mt-0 transform hover:scale-110 cursor-pointer" onClick={()=>{ setOpened(!opened);setPage("home");}}><AnchorLink  href="#home">Home</AnchorLink></li>
          <li className="transform hover:scale-110 cursor-pointer" onClick={()=>{ setOpened(!opened);setPage("about")}}><AnchorLink  href="#about">About Us</AnchorLink></li>
          <li className="transform hover:scale-110 cursor-pointer" onClick={()=>{ setOpened(!opened);setPage("services")}}><AnchorLink  href="#projects">Services</AnchorLink></li>
          <li className="transform hover:scale-110 cursor-pointer" onClick={()=>{ setOpened(!opened);setPage("projects")}}><AnchorLink  href="#projects">Portfolio</AnchorLink></li>
          <li className="transform hover:scale-110 cursor-pointer mb-5 md:mb-0" onClick={()=>{ setOpened(!opened);setPage("contact")}}><AnchorLink  href="#contact">Contact</AnchorLink></li>
        </ul>
      </div>
      <AnchorLink href="#contact" className="hidden md:block py-3 px-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer rounded-3xl transition delay-150 hover:scale-105">
        Connect With Me
      </AnchorLink>
    </div>
  );
};

