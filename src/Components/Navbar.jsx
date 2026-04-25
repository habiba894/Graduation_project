import iconlogo from "../assets/plane.png";
import crown from "../assets/crown.png";    
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="flex justify-center items-center w-full px-10 py-3 bg-white text-white sticky top-0 z-50">
      <div className="flex gap-10 justify-between  items-center w-full px-20">
        <div className="logo flex items-center gap-2 justify-center relative">
          <p className="text-black text-2xl font-bold">Wander<span className="text-[#d14b30]  font-extrabold">L</span>ust </p>
          <img src={iconlogo} className="w-17 absolute left-26  top-[-15%]"  data-aos="flip-left"/>
        </div>
        <div className=" flex items-center justify-center gap-10 font-semibold text-black">
          <p>Home</p>
          <p>Hotels</p>
          <p>Profile</p>
        <div className="flex items-center gap-2"><img src={crown} alt="crown" className="w-5" /><p>Premium </p> </div>  
        </div>
      </div>
      <div className="flex w-75  gap-3">
        <button className=" text-black px-4 py-1 rounded-full font-semibold">login</button>
        <button className="bg-[#d14b30] px-5 py-1 rounded-full ">
          Sign-up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
