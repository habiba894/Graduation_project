import iconlogo from "../assets/plane.png";
import crown from "../assets/crown.png";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // ACTIVE LINK STYLE
  const activeLink = (path) =>
    location.pathname === path
      ? "text-[#d14b30] font-bold"
      : "text-black";

  return (
    <>
      {/* NAVBAR */}
      <div className="flex justify-between items-center w-full px-4 md:px-10 py-3 bg-white sticky top-0 z-50 shadow-sm">
        
        {/* LOGO */}
        <Link to="/home">
          <div className="logo flex items-center gap-2 relative cursor-pointer">
            <p className="text-black text-lg md:text-2xl font-bold">
              Wander
              <span className="text-[#d14b30] font-extrabold">L</span>
              ust
            </p>

            <img
              src={iconlogo}
              className="w-10 md:w-16 absolute left-16 md:left-26 top-[-10%] md:top-[-15%]"
              data-aos="flip-left"
              alt="plane"
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 font-semibold">

          <Link
            to="/home"
            className={`${activeLink("/home")} transition hover:text-[#d14b30]`}
          >
            Home
          </Link>

          <Link
            to="/country"
            className={`${activeLink("/country")} transition hover:text-[#d14b30]`}
          >
            Countries
          </Link>

          <Link
            to="/subscription"
            className={`${activeLink("/subscription")} transition hover:text-[#d14b30]`}
          >
            Payment
          </Link>

          <div className="flex items-center gap-2 cursor-pointer hover:text-[#d14b30] transition">
            <img src={crown} alt="crown" className="w-5" />
            <p>Premium</p>
          </div>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex gap-3">
          <Link to="/">
            <button className="text-black px-4 py-1 rounded-full font-semibold hover:text-[#d14b30] transition">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-[#d14b30] px-5 py-1 rounded-full text-white hover:scale-105 transition">
              Sign-up
            </button>
          </Link>
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              className="w-7 h-7 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* OVERLAY */}
      <div
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-sm z-40
          transition-all duration-500
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white z-50
          transform transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          p-6 flex flex-col gap-6 shadow-2xl
        `}
      >
        <p className="text-xl font-bold">Menu</p>

        <Link
          to="/home"
          onClick={() => setOpen(false)}
          className={`${activeLink("/home")} font-semibold`}
        >
          Home
        </Link>

        <Link
          to="/country"
          onClick={() => setOpen(false)}
          className={`${activeLink("/country")} font-semibold`}
        >
          Countries
        </Link>

        <Link
          to="/subscription"
          onClick={() => setOpen(false)}
          className={`${activeLink("/subscription")} font-semibold`}
        >
          Payment
        </Link>

        <div className="flex items-center gap-2">
          <img src={crown} alt="crown" className="w-5" />
          <p className="font-semibold">Premium</p>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <Link to="/" onClick={() => setOpen(false)}>
            <button className="w-full text-black px-4 py-2 rounded-full font-semibold border hover:bg-gray-100 transition">
              Login
            </button>
          </Link>

          <Link to="/signup" onClick={() => setOpen(false)}>
            <button className="w-full bg-[#d14b30] px-5 py-2 rounded-full text-white hover:scale-[1.02] transition">
              Sign-up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;