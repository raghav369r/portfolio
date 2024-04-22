import { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from "../../assets/logo.svg";

import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [page ,setPage]=useState("home");
  const [opened,setOpened]=useState(false);
  // console.log(page);
  return (
    <div className="flex justify-between items-center my-5 md:mx-32">
      <img className="" src={logo}/>
      <div className="relative md:hidden" onClick={()=>setOpened(!opened)}>
        <CiMenuFries className="size-10 cursor-pointer"/>
      </div>
      <div className={"w-1/2 bg-black h-screen md:bg-transparent md:h-auto md:w-auto absolute top-0 right-0 md:relative md:block"+(opened?" block":" hidden")}>
        <ul className={"flex flex-col justify-end items-center md:flex-row gap-5 sm:flex-col font-customFont "}>
          <li className="md:hidden hover:border-b cursor-pointer ml-auto"><IoMdClose className="size-10 cursor-pointer" onClick={()=>setOpened(!opened)}/></li>
          <li className="hover:border-b cursor-pointer" onClick={()=>{ setOpened(!opened);setPage("home");}}><AnchorLink  href="#Home">Home</AnchorLink></li>
          <li className="hover:border-b cursor-pointer" onClick={()=>{ setOpened(!opened);setPage("about")}}><AnchorLink  href="#about">About Us</AnchorLink></li>
          <li className="hover:border-b cursor-pointer" onClick={()=>{ setOpened(!opened);setPage("services")}}><AnchorLink  href="#projects">Services</AnchorLink></li>
          <li className="hover:border-b cursor-pointer" onClick={()=>{ setOpened(!opened);setPage("projects")}}><AnchorLink  href="#projects">Portfolio</AnchorLink></li>
          <li className="hover:border-b cursor-pointer" onClick={()=>{ setOpened(!opened);setPage("contact")}}><AnchorLink  href="#contact">Contact</AnchorLink></li>
        </ul>
      </div>
      <AnchorLink href="#contact" className="hidden md:block py-3 px-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer rounded-3xl transition delay-150 hover:scale-105">
        Connect With Me
      </AnchorLink>
    </div>
  );
};

