import logo from "../../assets/logo.svg";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5 mx-32">
      <img className="" src={logo} />
      <ul className="flex gap-5 font-customFont">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="py-3 px-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer rounded-3xl transition delay-150 hover:-translate-y-1">
        Connect With Me
      </div>
    </div>
  );
};
