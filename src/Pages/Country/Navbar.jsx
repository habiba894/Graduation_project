import React from "react";
import logo from "../../assets/plane.png";

const Navbar = () => {
  return (
    <header className="w-full relative bg-white/90 backdrop-blur-md shadow-sm z-50 sticky top-0">
      <nav 
        className="w-full px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between max-w-[1800px] mx-auto"
        data-aos="fade-down"
      >
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="relative flex items-center">
            <h1 className="text-4xl font-bold text-gray-600 tracking-tight">
              Wander<span className="text-amber-600">L</span>ust
            </h1>
            <img
              src={logo}
              alt="plane"
              className="absolute -top-2 left-[100%] -translate-x-1/2 w-20 rotate-12"
            />
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-lg font-medium text-gray-700">
          <a href="#" className="text-xl hover:text-amber-600 transition-colors">Trip plan</a>
          <a href="#" className="text-xl hover:text-amber-600 transition-colors">Countries</a>
          <a href="#" className="text-xl hover:text-amber-600 transition-colors">Payment</a>
          <a href="#" className="flex items-center gap-2 text-xl text-gray-800 font-medium hover:text-amber-600 transition-colors">
            <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" />
              <path d="M19 19H5v2h14v-2z" />
            </svg>
            Premium
          </a>
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <a href="#" className="text-xl text-gray-700 font-medium hover:text-amber-600 transition-colors">login</a>
          <a href="#" className="text-xl px-6 py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all shadow-md hover:shadow-lg">
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;