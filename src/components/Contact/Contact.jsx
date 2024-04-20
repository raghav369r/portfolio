import theme_pattern from "../../assets/theme_pattern.svg";
import { IoMailOpenOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <div id="contact" className="font-customFont">
      <div className="flex justify-center">
        <h1 className="text-center text-5xl font-bold relative">
          Get in touch
        </h1>
        <img src={theme_pattern} className="absolute w-48 ml-36 -z-10" />
      </div>
      <div className="flex justify-center p-10">
        <div className="w-1/3 mt-4">
          <h1 className="font-semibold text-4xl bg-gradient-to-r from-pink-800 via-green-800 to-yellow-600 inline-block bg-clip-text text-transparent">
            Let&apos;s talk
          </h1>
          <p className="my-5">
            Iam currently available to work on new projects
          </p>
          <div className="my-3 flex justify-start items-center gap-4">
            <IoMailOpenOutline className="" />
            <h1>raghav1010reddy@gmail.com</h1>
          </div>
          <div className="my-3 flex justify-start items-center gap-4">
            <FiPhoneCall className="" />
            <h1>+91 7670837792</h1>
          </div>
          <div className="my-3 flex justify-start items-center gap-4">
            <GrLocation className="" />
            <h1>Bangalore, india</h1>
          </div>
        </div>
        <form className="w-1/2">
          <label>your name</label>
          <input
            type="text"
            className="focus:outline-none w-full px-4 py-2 bg-gray-800 my-4"
            placeholder="Enter ur name"
          />
          <label>your Email</label>
          <input
            type="email"
            className="focus:outline-none w-full px-4 py-2 bg-gray-800 my-4"
            placeholder="Enter ur email"
          />
          <label>write your message</label>
          <textarea
            rows={5}
            className="focus:outline-none w-full px-4 py-2 bg-gray-800 my-4"
            placeholder="Enter ur message"
          />
          <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform hover:scale-105">
            Submit now
          </button>
        </form>
      </div>
      <hr className="mx-20" />
      <div className="flex justify-between mx-20 my-5">
        <div className="mb-10">@2024 Raghav Reddy, All rights reserved.</div>
        <div className="flex gap-4">
          <h1>Terms Of Services</h1>
          <h1>Privacy Policy</h1>
          <h1>Connect With Me</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
