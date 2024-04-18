import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.svg";

import { skills } from "../../assets/data";

export const About = () => {
  return (
    <div className="font-customFont">
      <div className="flex justify-center m-20">
        <h1 className="text-5xl font-bold  relative">About Me</h1>
        <img src={theme_pattern} className="absolute w-32 ml-20 mt-5 -z-10" />
      </div>
      <div className="flex-row md:flex justify-center m-10 items-center">
        <div className="flex gap-8 size-80">
          <img src={about_profile} className="rounded-lg" />
        </div>
        <div className="md:w-3/5">
          <p className="text-xl mb-5">
            I&apos;m a passionate and results-oriented 3rd-year Computer Science
            Engineering student with a strong focus on full-stack web
            development. I&apos;m constantly seeking opportunities to learn and
            grow as a developer, and I&apos;m particularly interested in gaining
            practical experience through an internship.
          </p>
          <p className="text-xl mb-5">
            I&apos;m a quick learner, a team player, and highly motivated to
            tackle new challenges. I&apos;m eager to contribute my skills and
            knowledge to a team environment and learn from experienced
            professionals.
          </p>
          <p className="text-xl mb-5">
            I have foundation in programming languages, frameworks, and
            development tools. I&apos;m proficient in both front-end and
            back-end technologies, allowing me to work on all aspects of the web
            development process. (like HTML, CSS, JavaScript, Nodejs, ReactJs,
            etc.)
          </p>
        </div>
      </div>
      <div className="flex justify-center text-xl">
        <div className="w-1/2 flex-row gap-4">
          <div className="flex gap-14 items-center transform hover:scale-105">
            <h1 className="mt-1 min-w-36">HTML&CSS</h1>
            <hr className="h-2 outline-none rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[50%]" />
          </div>
          <div className="flex gap-14 items-center transform hover:scale-105">
            <h1 className="mt-1 min-w-36">React Js</h1>
            <hr className="h-2 outline-none rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[40%]" />
          </div>
          <div className="flex gap-14 items-center transform hover:scale-105">
            <h1 className="mt-1 min-w-36">JavaScript</h1>
            <hr className="h-2 outline-none rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[30%]" />
          </div>
          <div className="flex gap-14 items-center transform hover:scale-105">
            <h1 className="mt-1 min-w-36">Node Js</h1>
            <hr className="h-2 outline-none rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[45%]" />
          </div>
        </div>
      </div>
      {/* <div className="flex gap-4 justify-around text-center my-20">
        <div className="">
          <p className="text-4xl">0+</p>
          <p>Years of experience</p>
        </div>
        <div className="">
          <p className="text-4xl">4+</p>
          <p>Projects completed</p>
        </div>
        <div className="">
          <p className="text-4xl">10+</p>
          <p>Happy clients</p>
        </div>
      </div> */}
      <div className="flex justify-center gap-14">
        {skills.map((ele, ind) => (
          <div key={ind} className="flex-row w-52 my-10 transform cursor-pointer hover:scale-110">
            <img src={ele.img_link} className="size-52 rounded-lg"/>
            <h1 className="font-bold text-lg my-4">{ele.title}</h1>
            <p className="">{ele.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
