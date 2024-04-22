import theme_pattern from "../../assets/theme_pattern.svg";
import { projects } from "../../assets/data";
import { useState } from "react";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export const Projects = () => {
  return (
    <div id="projects" className="font-customFont">
      <div className="flex justify-center mb-14">
        <h1 className="text-5xl font-bold  relative font-customFont">
          Projects
        </h1>
        <img src={theme_pattern} className="absolute w-40 ml-20 mt-3 -z-10" />
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((ele, ind) => (
          <Project key={ind} ele={ele} />
        ))}
      </div>
      <div className="size-24"></div>
    </div>
  );
};

const Project = ({ ele }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="p-3 w-72 bg-gray-800 rounded-lg transform hover:scale-110 cursor-pointer hover:border-4 hover:border-pink-800 group"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <img src={ele.img_link} className="object-cover group-hover:opacity-50" />
      <h1 className="text-lg font-bold p-2">{ele.title}</h1>
      <p className="text-gray-500 p-2">{ele.description}</p>
      {show && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[150%] flex justify-center gap-10">
          <a target="_blank" href={ele.gitHub_link}>
            <AiFillGithub className="size-10 transform hover:scale-105" />
          </a>
          <a target="_blank" href={ele.live}>
            <AiOutlineEye className="size-10 transform hover:scale-105" />
          </a>
        </div>
      )}
    </div>
  );
};
