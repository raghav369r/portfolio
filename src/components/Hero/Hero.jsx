import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Hero = () => {
  return (
    <div id="about" className="font-customFont">
      <div className="flex justify-center mb-8 ">
        <img src={profile_img} />
      </div>
      <div className="flex justify-center mb-8 ">
        <h1 className="text-5xl font-bold w-1/2 text-center">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
            I &apos; m Raghav Reddy,
          </span>{" "}
          fullstack developer based in USA.{" "}
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="mb-8 w-1/2 text-center text-xl">
          I am fullstack developer from california, USA with 10 yesrs of
          experience in multiple companies like Microsoft, Tesla and Apple
        </p>
      </div>
      <div className="flex justify-center gap-12">
        <AnchorLink
          href="#contact"
          className="py-3 px-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer rounded-3xl hover:border-2 hover:border-white"
        >
          Connect With me
        </AnchorLink>

        <div className="py-3 px-7 border-2 rounded-3xl hover:border-purple-900 border-white">
          Resume
        </div>
      </div>
    </div>
  );
};
